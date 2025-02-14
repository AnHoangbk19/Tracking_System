import serial.tools.list_ports
import sys
import time
from time import sleep
import mysql.connector
from Adafruit_IO import MQTTClient

AIO_FEED_ID = "bbc-temp"
AIO_USERNAME = "khanhtran01"
AIO_KEY = "aio_XjWx92dC6zNwBEkz4ejUhEiAQhJR"
conn = mysql.connector.connect(
user='root', password='', host='127.0.0.1', database='test')

#Creating a cursor object using the cursor() method
cursor = conn.cursor()

def  connected(client):
    print("Ket noi thanh cong...")
    client.subscribe(AIO_FEED_ID)

def  subscribe(client , userdata , mid , granted_qos):
    print("Subcribe thanh cong...")

def  disconnected(client):
    print("Ngat ket noi...")
    sys.exit (1)

def  message(client , feed_id , payload):
    print("Nhan du lieu: " + payload)
    ser.write((str(payload) + "#").encode())

client = MQTTClient(AIO_USERNAME , AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()

def getPort():
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "USB Serial Device" in strPort:
            splitPort = strPort.split(" ")
            commPort = (splitPort[0])
    return commPort

ser = serial.Serial( port=getPort(), baudrate=115200)

mess = ""
def processData(data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)
    if splitData[1] == "TEMP":
        sql = "INSERT INTO `temp` (`ID`, `temp`) VALUES ('', '{}');".format(splitData[2])
        # client.publish("bbc-temp", splitData[2])
        try:
            cursor.execute(sql)
            conn.commit()

        except:
      # Rolling back in case of error
            conn.rollback()
        
    elif splitData[1] == "HUMI":
        sql = "INSERT INTO `humi` (`ID`, `humi`) VALUES ('', '{}');".format(splitData[2])
        # client.publish("bbc-humi", splitData[2])
        try:
            cursor.execute(sql)
            conn.commit()

        except:
      # Rolling back in case of error
            conn.rollback()
        

mess = ""
def readSerial():
    bytesToRead = ser.inWaiting()
    if (bytesToRead > 0):
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(mess[start:end + 1])
            if (end == len(mess)):
                mess = ""
            else:
                mess = mess[end+1:]

while True:
    readSerial()
    time.sleep(1)