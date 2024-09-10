import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Ism kamida 3 ta harfdan tashkil topishi kerak")
    .required("Ism kiritish majburiy"),
  email: Yup.string()
    .email("Email manzil xato kiritildi")
    .required("Email kiritish majburiy"),
  password: Yup.string()
    .min(6, "Parol kamida 6 ta harflar va belgilardan tashkil topishi kerak")
    .required("Parol kiritish majburiy"),
});
