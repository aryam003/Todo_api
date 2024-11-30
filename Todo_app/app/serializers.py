from rest_framework import serializers
from . models import *

class Todo_serializers(serializers.ModelSerializer):
    class Meta:
        models=Todo
        fields='__all__'