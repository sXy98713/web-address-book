# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-12-15 12:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0002_auto_20181215_1228'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='login_user',
            name='id',
        ),
        migrations.AlterField(
            model_name='login_user',
            name='username',
            field=models.CharField(max_length=19, primary_key=True, serialize=False),
        ),
    ]