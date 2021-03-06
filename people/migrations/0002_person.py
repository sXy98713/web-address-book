# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-12-13 14:54
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('login', '0001_initial'),
        ('people', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=15)),
                ('school', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=30)),
                ('phoneNo', models.CharField(max_length=11)),
                ('email', models.EmailField(max_length=254)),
                ('qq', models.CharField(max_length=9)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.login_user')),
            ],
        ),
    ]
