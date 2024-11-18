import { KeyboardAvoidingView, View, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreens() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <KeyboardAvoidingView className="flex-1 items-center justify-center" behavior="padding">
      <ImageBackground source={require('./../../assets/bg-images/Wheat.jpg')} className="w-full h-full object-cover">
        <LinearGradient
          colors={['#4AF146', 'transparent']}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
          start={{ x: 0, y: 2 }}
          end={{ x: 1, y: 0 }}
        />
        
        <View className="flex-1 items-center justify-center mt-[30px]">
          <Text className="font-bold color-tertiary text-[52px]">Welcome</Text>
          <Text className="font-bold color-tertiary text-[52px]">The</Text>
          <Text className="font-bold color-tertiary text-[52px] mb-8">FarmNamin</Text>

          <View className="p-2 mb-[20px] relative">
            <TextInput
              value={username}
              onChangeText={setUsername}
              onFocus={() => {
                setIsUsernameFocused(false);
                if(!username) setIsUsernameFocused(true);
               }}
              onBlur={() => setIsUsernameFocused(false)}
              placeholder={isUsernameFocused ? '' : 'Username'}
              placeholderTextColor='#1BA40F'
              className="w-[286px] h-[52px] pl-8 bg-secondary rounded-[10px] text-[18px] text-white"
            />
            {isUsernameFocused || username ? (
              <Text className="absolute left-[40] mt-[10] text-[14px] text-[#1BA40F]">Username</Text>
            ) : null}
          </View>

          <View className="p-2 mb-[20px] relative">
            <TextInput
              value={password}
              onChangeText={setPassword}
              onFocus={() => {
                setIsPasswordFocused(false);
                if(!password) setIsPasswordFocused(true);
              }}
              onBlur={() => setIsPasswordFocused(false)}
              placeholder={isPasswordFocused ? '' : 'Password'}
              placeholderTextColor='#1BA40F'
              secureTextEntry
              className="w-[286px] h-[52px] pl-8 bg-secondary rounded-[10px] text-[18px] text-white"
            />
            {isPasswordFocused || password ? (
              <Text className="absolute left-[40] mt-[10] text-[14px] text-[#1BA40F]">Password</Text>
            ) : null}
          </View>

          <View className="py-2 mr-[150px]">
            <TouchableOpacity className="mt-[-25px]">
              <Text className="text-2xl font-bold text-white text-[14px]">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity onPress={() => console.log('You are now login!')} className="w-[238px] h-[40px] p-2 bg-primary rounded-[10px] mt-[30px]">
            <Text className="text-white text-center text-[20px] font-semi">Login</Text>
          </TouchableOpacity>

          <View className="p-2 mt-[20px] flex-row">
            <Text className="text-white text-center text-[15px] font-medium">Don't have an account?</Text>
            <TouchableOpacity className="pl-1">
              <Text className="underline color-accent text-center text-[16px] font-medium">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
