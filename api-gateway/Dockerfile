FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY api-gateway.csproj ./
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS final
WORKDIR /app
COPY --from=build /app .
EXPOSE 80
ENTRYPOINT ["dotnet", "api-gateway.dll"]

