import { isTMA } from "@telegram-apps/sdk";
import { useRawInitData } from "@telegram-apps/sdk-react";

export function useIsTG() {
  if (isTMA()) {
    const initData = useRawInitData();
    return initData;
  } else {
    return null;
  }
}
