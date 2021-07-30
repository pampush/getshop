import axios from 'axios';

interface ResponseData {
  valid: boolean;
  number: string;
  country_code: string;
}

type verifyNumberFunc = (num: string, country: string) => Promise<ResponseData>;

/**
 * Specific API request logic
 * @param number
 * @param countryCode
 * @returns
 */
const numVerifyAPI = async (number: string, countryCode: string): Promise<ResponseData> => {
  try {
    const response = await axios.get<ResponseData>(
      `api/verify-number/?number=${number}&country_code=${countryCode}`,
    );

    if (response.status === 210)
      throw new Error('Пожалуйста, укажите номер. [Пример: 79161234567]');
    if (response.data.valid === false)
      throw new Error('Неверно введен номер [Пример: 79161234567]');

    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

/**
 * Decorator for dependency inversion. Makes possible API substitute without pain!
 * @param APIMethod
 * @returns
 */
const verifyNumber =
  (APIMethod: verifyNumberFunc): verifyNumberFunc =>
  async (number: string, countryCode: string) => {
    try {
      const data = await APIMethod(number, countryCode);
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  };

const verify = verifyNumber(numVerifyAPI);

export { verify };
