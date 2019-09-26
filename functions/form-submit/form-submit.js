const headers = {
  // 'Access-Control-Allow-Origin': ALLOW_ORIGIN,
  'Content-Type': 'application/json',
}

const evaluate = (data) => {
  try {
    if (data.income.amount < 1) {
      return 'eligible'
    }
  } catch (err) {
    // pass
  }

  return 'ineligible'
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
        statusCode: 405,
        body: JSON.stringify({message: "Method Not Allowed"}),
        headers,
    }
  }

  try {
    const data = JSON.parse(event.body)

    const eligibility = evaluate(data)

    return {
      statusCode: 200,
      body: JSON.stringify({ eligibility }),
      headers,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
};
