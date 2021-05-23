const analyticsUA = 'UA-172898631-1'

const isProd = process.env.NODE_ENV === 'production'

const sendAnalyticsEvent = (event, label, window) => {
  return isProd && window.gtag('event', event, {
    'event_category' : 'Encomenda',
    'event_label' : label
  })
}

const sendAnalyticsPageView = (page_path, window) => {
  return isProd && window.gtag('config', analyticsUA, { page_path })
}

const analyticsHtml = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${analyticsUA}');
`

const analyticsUrl = `https://www.googletagmanager.com/gtag/js?id=${analyticsUA}`

export {
  isProd,
  sendAnalyticsEvent,
  sendAnalyticsPageView,
  analyticsHtml,
  analyticsUrl,
}