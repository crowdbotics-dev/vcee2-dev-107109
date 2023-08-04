from rest_framework import viewsets
from home.models import Cder,Cder2,Cder3,Cder4,Cder,Cder4,Cder,Cder4
from .serializers import CderSerializer,Cder2Serializer,Cder3Serializer,Cder4Serializer,CderSerializer,Cder4Serializer,CderSerializer,Cder4Serializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class CderViewSet(viewsets.ModelViewSet):
    serializer_class = CderSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Cder.objects.all()

class Cder2ViewSet(viewsets.ModelViewSet):
    serializer_class = Cder2Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Cder2.objects.all()

class Cder3ViewSet(viewsets.ModelViewSet):
    serializer_class = Cder3Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Cder3.objects.all()

class Cder4ViewSet(viewsets.ModelViewSet):
    serializer_class = Cder4Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Cder4.objects.all()
