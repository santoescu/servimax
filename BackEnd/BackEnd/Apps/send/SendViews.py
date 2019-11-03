from django.shortcuts import render
from django.core.mail import send_mail
from django.http import HttpResponse
import json


def send_view(request, slug):

	print(slug)

	send_mail(
    'Solicitud de cobro compraventa ServiMax.',
    'Apreciado cliente, le invitamos que realice su pago por medio del siguiente link:\nhttps://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/\n\nGracias',
    'ceq930127@gmail.com',
    [slug],
    fail_silently=False,)
	return HttpResponse ("<h1> Enviado </h1>")