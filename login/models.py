# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class login_user(models.Model):
    username=models.CharField(max_length=19,primary_key=True)
    password=models.CharField(max_length=20)