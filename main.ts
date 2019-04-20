import { ConnpassEventsResponse } from "./connpass";

// Connpass API: https://connpass.com/about/api/
//
// 2400 is a series id of ふくもく会.
// Your series id can be revrieved by calling
// https://connpass.com/api/v1/event/?event_id=YOUR_EVENT_ID
const CONNPASS_SERIES_ID = 2400

function syncEvents() {
  const query = [
    `series_id=${CONNPASS_SERIES_ID}`,
    `count=100`,
    // 開催日時順 (2)
    `order=2`
  ].join('&')
  const respObj = UrlFetchApp.fetch(`https://connpass.com/api/v1/event/?${query}`)
  const resp = JSON.parse(respObj.getContentText()) as ConnpassEventsResponse

  const cells = resp.events.map(event => ([
    event.title,
    _formatDate(new Date(event.started_at)),
    event.event_url,
    event.place,
    event.address
  ]))

  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(2, 1, cells.length, 5).setValues(cells)
}

function _formatDate(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
