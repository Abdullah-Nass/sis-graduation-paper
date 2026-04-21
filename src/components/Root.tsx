import { IntlProvider } from "react-intl";
import App from "../App.tsx";
import { useLocale } from "./UseLocale";
import ar from "../locales/ar.json";
import en from "../locales/en.json";
const messages = { en, ar };
const Root = () => {
  const { locale } = useLocale();
  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}
    >
      <App />
    </IntlProvider>
  );
};

export default Root;
