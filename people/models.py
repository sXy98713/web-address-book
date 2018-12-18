# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from login.models import login_user
from django.db import models
# Create your models here.
class person(models.Model):
    user=models.ForeignKey('login.login_user',related_name='info')
    name=models.CharField(max_length=15)
    school=models.CharField(max_length=20)
    address=models.CharField(max_length=30)
    phoneNo=models.CharField(max_length=11)
    email=models.EmailField()
    qq=models.CharField(max_length=9)

