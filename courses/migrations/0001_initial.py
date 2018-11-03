# Generated by Django 2.0.9 on 2018-11-03 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_id', models.CharField(max_length=20)),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField()),
            ],
        ),
    ]