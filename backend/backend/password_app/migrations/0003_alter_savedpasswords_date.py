# Generated by Django 5.1 on 2024-09-13 03:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('password_app', '0002_alter_savedpasswords_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='savedpasswords',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
