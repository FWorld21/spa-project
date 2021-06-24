#!/usr/bin/env python3

import telebot
from optparse import OptionParser


def message_for_call():
    msg = f'<i>Внимание!</i>\n\n' \
          f'<b>{options.name}</b>\n' \
          f'<i>Заказал обратный звонок</i>\n\n' \
          f'<i>Его номер телефона:</i> <b>{options.phone}</b>'
    return msg


parser = OptionParser()
parser.add_option('-n', '--name', dest='name',
                  help='Name', metavar='NAME')
parser.add_option('-p', '--phone', dest='phone',
                  help='phone number', metavar='PHONE')

(options, args) = parser.parse_args()
print(options.name)
print(options.phone)

with open('bot_engine/api.txt', 'r') as apifile:
    bot = telebot.TeleBot(apifile.read())

with open('bot_engine/chat_id.txt', 'r') as chat_id:
    if options.name and options.phone:
        bot.send_message(chat_id=954359151, text=message_for_call(), parse_mode='html')
    else:
        print('Use options! Type --help to learn')
