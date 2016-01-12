# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-12 02:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('short_desc', models.TextField(max_length=1000, null=True)),
                ('long_desc', models.TextField(max_length=10000, null=True)),
                ('season', models.CharField(choices=[('WI', 'Winter'), ('SP', 'Spring'), ('SU', 'Summer'), ('FA', 'Fall')], default='SUMMER', max_length=2, null=True)),
                ('image_src', models.URLField(null=True)),
                ('area1_name', models.CharField(max_length=200)),
                ('area2_name', models.CharField(max_length=200)),
                ('recommended_months', models.CommaSeparatedIntegerField(max_length=100, null=True)),
            ],
        ),
    ]