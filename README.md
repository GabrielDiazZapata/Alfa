 <NavigationContainer>
      <Stack.Navigator>
        {/* Puedes agregar tu pantalla de Login aquí */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "LOGIN",
            headerTintColor: "#1f0a1d",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#9acc77" },
          }}
        />
        {/* Tu pantalla de bienvenida */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: "ALFA",
            headerTintColor: "",
            headerTitleAlign: "center", 
            headerStyle: { backgroundColor: "#45936c" },
          }}

        />
      <Stack.Screen
          name="Main"
          component={() => <MainPage isEnabled={isEnabled} />}
          options={{
            title: "Portfolio",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#525FE1" },
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>