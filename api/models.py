from django.db import models


class Persona(models.Model):
    idCliente = models.AutoField(primary_key=True, verbose_name='idCliente')
    nombreCliente = models.CharField(max_length = 50, verbose_name= 'nombreCLiente')
    emailCliente = models.CharField(max_length = 50, verbose_name= 'emailCLiente')
    telefono = models.IntegerField(verbose_name='telefono')
    contraseña = models.CharField(max_length = 50, verbose_name= 'contraseña')



    def __int__(self):
        return self.idCliente


class Agenda(models.Model):
    idAgenda = models.AutoField(primary_key=True, verbose_name='idAgenda', unique=True)
    horario = models.CharField(max_length = 10, verbose_name= 'horario')
    fecha = models.DateField(verbose_name= 'fecha')
    marca = models.CharField(max_length = 40, verbose_name= 'marca')
    modelo = models.CharField(max_length = 40, verbose_name= 'modelo')
    kilometraje = models.IntegerField(verbose_name='kilometraje')
    idCli = models.ForeignKey(Persona, on_delete = models.CASCADE)


    def __int__(self):
        return self.idAgenda

class Servicio(models.Model):
    idServicio = models.AutoField(primary_key=True, verbose_name='idServicio')
    mantencionGeneral = models.CharField(max_length = 40, verbose_name= 'mantencionGeneral')
    mecanicaGeneral = models.CharField(max_length = 40, verbose_name= 'mecanicaGeneral')
    cambioAceite = models.CharField(max_length = 40, verbose_name= 'cambioAceite')
    precio = models.IntegerField(verbose_name='precio')
    idAge = models.ForeignKey(Agenda, on_delete = models.CASCADE)


    def __int__(self):
        return self.idServicio



class Boleta(models.Model):
    idBoleta = models.AutoField(primary_key=True, verbose_name='idBoleta')
    descripcion = models.CharField(max_length = 40, verbose_name= 'descripcion')
    valorUnitario = models.IntegerField(verbose_name='valorUnitario')
    valorTotal = models.IntegerField(verbose_name='valorTotal')
    idServ = models.ForeignKey(Servicio, on_delete = models.CASCADE)

    def __int__(self):
        return self.idBoleta

