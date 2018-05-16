# Import
import math
import time
import serial


class Hal(object):

    def __init__(self):
        self.conn = serial.Serial(port='/dev/ttyACM0', baudrate=115200, timeout=1)
        self.exec_command('TestMode On')
        time.sleep(12)

    def __format_response(self, response):
        size = len(response)
        response = response[1:size-2]
        return response

    def __convert_analog_sensors_to_dictionary(self, sensors):
        result = {}
        for sensor in sensors:
            sensor = sensor.split(",")
            result.update({sensor[0]: float(sensor[2])})
        return result

    def __convert_digital_sensors_to_dictionary(self, sensors):
        result = {}
        for sensor in sensors:
            sensor = sensor.split(",")
            result.update({sensor[0]: float(sensor[1].strip())})
        return result
            
    def exec_command(self, cmd):
        self.conn.write(cmd + '\r\n')
        time.sleep(.05)
        response = self.conn.readlines()
        response = self.__format_response(response)
        return response

    def sample_analog_sensors(self):
        response = self.exec_command('GetAnalogSensors')
        response = self.__convert_analog_sensors_to_dictionary(response[1:])
        return response
    
    def sample_digital_sensors(self):
        response = self.exec_command('GetDigitalSensors')
        response = self.__convert_digital_sensors_to_dictionary(response[1:])
        return response

    def sample_ultrasonic_sensor(self, port, slot):
        sensors = self.sample_analog_sensors()
        key = 'UltraSound' + port.title() + slot.title()
        return sensors[key] / 10.

    def sample_touch_sensor(self, port, slot):
        sensors = self.sample_digital_sensors()
        key = port[0] + slot + 'bit'
        key = key.upper()
        return sensors[key]

    def sample_dropoff_sensor(self, port):
        sensors = self.sample_analog_sensors()
        key = 'DropSensor' + port.title()
        return sensors[key] / 10.

    def sample_wall_sensor(self):
        sensors = self.sample_analog_sensors()
        key = 'WallSensor'
        return sensors[key] / 10.

    def sample_accelerometer_sensor(self, port):
        sensors = self.sample_analog_sensors()
        key = 'Accelerometer' + port.upper()
        return sensors[key]
