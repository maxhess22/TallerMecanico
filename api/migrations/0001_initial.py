# Generated by Django 3.2.9 on 2021-11-10 23:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Agenda',
            fields=[
                ('idAgenda', models.AutoField(primary_key=True, serialize=False, unique=True, verbose_name='idAgenda')),
                ('horario', models.CharField(max_length=10, verbose_name='horario')),
                ('fecha', models.DateField(verbose_name='fecha')),
                ('marca', models.CharField(max_length=40, verbose_name='marca')),
                ('modelo', models.CharField(max_length=40, verbose_name='modelo')),
                ('kilometraje', models.IntegerField(verbose_name='kilometraje')),
            ],
        ),
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('idCliente', models.AutoField(primary_key=True, serialize=False, verbose_name='idCliente')),
                ('nombreCliente', models.CharField(max_length=50, verbose_name='nombreCLiente')),
                ('emailCliente', models.CharField(max_length=50, verbose_name='emailCLiente')),
                ('telefono', models.IntegerField(verbose_name='telefono')),
                ('contraseña', models.CharField(max_length=50, verbose_name='contraseña')),
            ],
        ),
        migrations.CreateModel(
            name='Servicio',
            fields=[
                ('idServicio', models.AutoField(primary_key=True, serialize=False, verbose_name='idServicio')),
                ('mantencionGeneral', models.CharField(max_length=40, verbose_name='mantencionGeneral')),
                ('mecanicaGeneral', models.CharField(max_length=40, verbose_name='mecanicaGeneral')),
                ('cambioAceite', models.CharField(max_length=40, verbose_name='cambioAceite')),
                ('precio', models.IntegerField(verbose_name='precio')),
                ('idAge', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.agenda')),
            ],
        ),
        migrations.CreateModel(
            name='Boleta',
            fields=[
                ('idBoleta', models.AutoField(primary_key=True, serialize=False, verbose_name='idBoleta')),
                ('descripcion', models.CharField(max_length=40, verbose_name='descripcion')),
                ('valorUnitario', models.IntegerField(verbose_name='valorUnitario')),
                ('valorTotal', models.IntegerField(verbose_name='valorTotal')),
                ('idServ', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.servicio')),
            ],
        ),
        migrations.AddField(
            model_name='agenda',
            name='idCli',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.persona'),
        ),
    ]
