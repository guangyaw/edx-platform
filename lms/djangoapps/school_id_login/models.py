
from __future__ import unicode_literals

from django.db import models

# Create your models here.
from django.contrib.auth.models import User
# from student.models import UserProfile


class Xsuser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nid_linked = models.TextField(blank=True, null=True, default='default')
    ask_nid_link = models.TextField(blank=True, null=True, default='default')

    class Meta(object):
        app_label = 'school_id_login'
