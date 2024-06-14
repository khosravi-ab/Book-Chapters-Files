import { NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en-us", "en", "fa-ir", "fa"];

function getLocale(request) {
  const negotiatorHeader = {};
  request.headers.forEach((value, key) => (negotiatorHeader[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeader }).languages();
  console.log(`Languages: ${languages}`);

  const defaultLocale = "fa-ir";
  const locale = match(languages, locales, defaultLocale);
  console.log(`Locale: ${locale}`);

  return locale;
}

export function middleware(request) {
  const locale = getLocale(request);
  console.log(`Middleware: ${locale}`);

  return;
}
