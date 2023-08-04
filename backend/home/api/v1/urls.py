from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CderViewSet,Cder2ViewSet,Cder2ViewSet,Cder2ViewSet,Cder2ViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('cder', CderViewSet )
router.register('cder2', Cder2ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
