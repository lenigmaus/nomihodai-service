# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-12 02:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nomihodai', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='food',
            name='recommended_months',
            field=models.CommaSeparatedIntegerField(blank=True, max_length=100, null=True),
        ),
    ]
