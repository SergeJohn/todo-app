# Generated by Django 4.1.4 on 2022-12-15 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='completed',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
