import { $authHost } from "./index";

export const fetchBasket = async () => {
  const { data } = await $authHost.get("api/basket");
  return data;
};

export const createBasket = async (deviceId) => {
  const { data } = await $authHost.post("api/basket", {
    deviceId,
  });
  return data;
};

export const deleteBasket = async (deviceId) => {
  console.log(deviceId);

  const { data } = await $authHost.delete("api/basket", {
    deviceId,
  });

  return data;
};
