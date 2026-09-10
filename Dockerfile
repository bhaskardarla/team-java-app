FROM eclipse-temurin:17-jre

WORKDIR /app

COPY target/brew-and-bloom-1.0.0.ja app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
