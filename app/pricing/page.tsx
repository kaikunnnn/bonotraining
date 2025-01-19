"use client"

export default function Page() {
  // TODO: リリース時は本番用のIDに変更する
  const priceId = process.env.NEXT_PUBLIC_STRIPE_TEST_PRICE_ID;

  if (!priceId) {
    throw new Error('プランが見つかりませんでした。');
  }

  const handleButtonClick = async () => {
    const response = await fetch('/api/stripe/checkout/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
    })
    const session = await response.json();
    window.location.href = session.url;
  }

  return (
    <>
      <p>デザインスキルを身につける旅を始めよう</p>
      <div>
          <p>プラン名</p>
          <p>プラン説明</p>
          <button onClick={handleButtonClick}>カード情報の入力に進む</button>
      </div>
    </>
  );
}
