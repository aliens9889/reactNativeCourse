# React Native Course The Practical Guide

This is a following tutorial by Maximilian Schwarzmüller you can follow his tutorial in [Udemy](https://www.udemy.com/react-native-the-practical-guide/).

This project is an extension about the things I've been study with react and adding the new elements from react-native.

A difference between the original tutorial and this one is I couldn't start the project with this command
```
create-react-native-app <name_app>
```
Well actually I can the real problem was when I tried to run the project after run this command
```
npm run eject
```

After this once I tried to run on ios, it didn't work . So the other way I could find to follow the tutorial was running this command.

```
react-native init <my_app_name>
```

The difference that I noticed using this command is that it doesn't use expo app to update the project. The changes you make you have to refresh with Cmd+R (If you are using Mac) or Ctrl+R (In any other machine).

To run ios simulator the command is
```
react-native run-ios
```

And for Android
```
react-native run-android
```

But remember only can run ios in Mac, and for both cases you have to keep update Xcode and to run Android install the elements neccsary like Android Studio or just the Android Development Kit (ADK). If you follow the tutorial on [Udemy](https://www.udemy.com/react-native-the-practical-guide/). You will have more info about it.


# Reminder

## React Native Vector Icons 

If you going to use this dependency

```
yarn add react-native-vector-icons
```

Beside of installed it, you have to make some modifications. This case I will explain what to do with IOS.

1. You need to open the project on Xcode, find the folder **ios** on the project and find the **ProjectName.xcodeproj**
2. On Show the Project Navigator (Xcode) find the folder Libraries with right click pick the option **Add Files to...**
3. Find the file RNVectorIcons.xcodeproj on `node_modules/react-native-vector-icons` and press Add button (before press the add button check if the `Add to Targets` the first option is checked).
4. Check in Build Phases the option **Link Binary With Libraries** press the + button and add **libRNVectorIcons.a**
5. Find on your Project's folders the Font folder and the file **Ionicons.ttf**. Should be here `node_modules/react-native-vector-icons/Fonts/Ionicons.ttf`. Once you find it, drag it into the xcode(Below the **ProjectName.xcodeproj**). Should show you `Choose options for adding these file`. You will check the first option on `Add to targets` (The first option has the same project name when you create it with react-native).
6. With the past step will appear a file `Info.plist`. On Information Property List click with the right click and select the option **Add Row**
7. In the new row you write (Will autocomplete) this: `Fonts provided by application`. This new Row will have one item (Item 0). And value you will write the font you added before **Ionicons.ttf**
8. After all this process, you will can use this dependency and what the adds and changes you will code.

For more detail about React Native Vector Icons click [here](https://github.com/oblador/react-native-vector-icons)
