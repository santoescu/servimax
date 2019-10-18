from django.shortcuts import render
from django.core.mail import send_mail
from django.http import HttpResponse



def send_view(request, *args, **kwargs):

	if(request.method == 'POST'):
		print('si')
	
	send_mail('Hola',
		'Mensaje final',
		'ceq930127@gmail.com',
		['harveyja@yahoo.com'],
		fail_silently=False)
	return HttpResponse ("<h1> Enviado </h1>")