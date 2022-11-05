import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useCachedResources() {
 const [isLoadingComplete, setIsLoadingComplete] = useState(false);

 useEffect(() => {
  async function loadResourcesAndDataAsync() {
   try {
    await Font.loadAsync({
     'Aullia': require('./assets/fonts/Aullia.otf'),
     'Nam-Regular': require('./assets/fonts/NanumMyeongjo-Bold.ttf'),
     'Nam-Bold': require('./assets/fonts/NanumMyeongjo-Bold.ttf'),
     'Nam-ExtraBold': require('./assets/fonts/NanumMyeongjo-ExtraBold.ttf'),
    });
   } catch (e) {
    console.warn(e);
   } finally {
    setIsLoadingComplete(true);
   }
  }

  loadResourcesAndDataAsync();
 }, [isLoadingComplete]);

 return isLoadingComplete;
}