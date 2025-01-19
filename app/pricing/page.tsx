"use client"

export default function Page() {
  const STRIPE_PRODUCT_ID = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_ID;

  if (!STRIPE_PRODUCT_ID) {
    throw new Error('プランが見つかりませんでした。');
  }

  const handleButtonClick = () => {
    console.log('カード情報の入力に進む');
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
