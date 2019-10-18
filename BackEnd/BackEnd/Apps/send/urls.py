from django.contrib import admin

from django.urls import path

from BackEnd.Apps.send import SendViews

from django.views.decorators.csrf import csrf_exempt

urlpatterns = [

    path('', csrf_exempt(SendViews.send_view)),

]