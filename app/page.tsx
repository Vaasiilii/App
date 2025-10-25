'use client'

import { useState, useEffect } from 'react'

// Language content with Asian languages
const content = {
  en: {
    header: {
      title: "TrayReturn",
      contact: "Contact"
    },
    howItWorks: {
      title: "How It Works",
      step1: {
        title: "Show QR Code",
        description: "Open your QR code from your personal account and show it to the cashier. If you don't have a phone, give your phone number to register the trolley."
      },
      step2: {
        title: "Select Empty Place",
        description: "When you are done with the food, go to the service, select an empty place for the tray on the cart and take it."
      },
      step3: {
        title: "Earn Rewards",
        description: "Get bonus points redeemable at local cafes and partner services."
      }
    },
    hero: {
      title: "Tray Return",
      subtitle: "Return trays effortlessly. Earn rewards instantly.",
      getStarted: "Get Started",
      returnTray: "Return Tray",
      confirmPlacement: "Confirm Placement",
      balance: "Balance",
      points: "points",
      localCafes: "Local Cafes",
      partnerRewards: "Partner Rewards"
    },
    trolleys: {
      title: "Available Trolleys",
      trolleyA: "Trolley A",
      trolleyB: "Trolley B", 
      trolleyC: "Trolley C",
      available: "Available",
      full: "Full",
      slots: "slots"
    },
    footer: {
      copyright: "© 2024 TrayReturn. All rights reserved."
    },
    modals: {
      signIn: "Sign In",
      email: "Email",
      phone: "Phone Number",
      cancel: "Cancel",
      selectTrolley: "Select Trolley",
      interactiveMap: "Interactive Map",
      availableTrolleys: "Available Trolleys",
      close: "Close",
      bookShelf: "Book Shelf",
      availableShelves: "Available Shelves:",
      confirmTrayPlacement: "Confirm Tray Placement",
      instructions: "Instructions:",
      sensorCheck: "Sensor Check:",
      confirmPlacement: "Confirm Placement",
      checkingPlacement: "Checking Placement",
      complete: "Complete",
      placementConfirmed: "Placement Confirmed",
      placementNotConfirmed: "Placement Not Confirmed",
      earnedPoints: "You earned 10 bonus points!",
      continue: "Continue",
      tryAgain: "Try Again",
      localCafes: "Local Cafes",
      partnerRewards: "Partner Rewards",
      contactSupport: "Contact Support"
    },
  },
  ru: {
    header: {
      title: "TrayReturn",
      contact: "Контакты"
    },
    howItWorks: {
      title: "Как это работает",
      step1: {
        title: "Показать QR-код",
        description: "Откройте QR-код из вашего личного аккаунта и покажите его кассиру. Если у вас нет телефона, назовите номер телефона для регистрации тележки."
      },
      step2: {
        title: "Выберите свободное место",
        description: "Когда вы закончили с едой, идите к сервису, выберите свободное место для подноса на тележке и возьмите его."
      },
      step3: {
        title: "Получите награды",
        description: "Получайте бонусные баллы, которые можно обменять в местных кафе и партнерских сервисах."
      }
    },
    hero: {
      title: "Возврат подносов",
      subtitle: "Возвращайте подносы легко. Получайте награды мгновенно.",
      getStarted: "Начать",
      returnTray: "Вернуть поднос",
      confirmPlacement: "Подтвердить размещение",
      balance: "Баланс",
      points: "баллов",
      localCafes: "Местные кафе",
      partnerRewards: "Партнерские награды"
    },
    trolleys: {
      title: "Доступные тележки",
      trolleyA: "Тележка А",
      trolleyB: "Тележка Б",
      trolleyC: "Тележка В",
      available: "Доступно",
      full: "Занято",
      slots: "мест"
    },
    footer: {
      copyright: "© 2024 TrayReturn. Все права защищены."
    },
    modals: {
      signIn: "Войти",
      email: "Email",
      phone: "Номер телефона",
      cancel: "Отмена",
      selectTrolley: "Выбрать тележку",
      interactiveMap: "Интерактивная карта",
      availableTrolleys: "Доступные тележки",
      close: "Закрыть",
      bookShelf: "Забронировать полку",
      availableShelves: "Доступные полки:",
      confirmTrayPlacement: "Подтвердить размещение подноса",
      instructions: "Инструкции:",
      sensorCheck: "Проверка датчика:",
      confirmPlacement: "Подтвердить размещение",
      checkingPlacement: "Проверка размещения",
      complete: "Завершено",
      placementConfirmed: "Размещение подтверждено",
      placementNotConfirmed: "Размещение не подтверждено",
      earnedPoints: "Вы заработали 10 бонусных баллов!",
      continue: "Продолжить",
      tryAgain: "Попробовать снова",
      localCafes: "Местные кафе",
      partnerRewards: "Партнерские награды",
      contactSupport: "Связаться с поддержкой"
    }
  },
  zh: {
    header: {
      title: "TrayReturn",
      contact: "联系我们"
    },
    howItWorks: {
      title: "使用方法",
      step1: {
        title: "显示二维码",
        description: "从您的个人账户打开二维码并向收银员展示。如果您没有手机，请提供您的电话号码来注册手推车。"
      },
      step2: {
        title: "选择空位",
        description: "当您用完餐后，前往服务台，在手推车上选择一个空位放置托盘。"
      },
      step3: {
        title: "获得奖励",
        description: "获得可在当地咖啡厅和合作伙伴服务中兑换的奖励积分。"
      }
    },
    hero: {
      title: "托盘归还",
      subtitle: "轻松归还托盘。即时获得奖励。",
      getStarted: "开始使用",
      returnTray: "归还托盘",
      confirmPlacement: "确认放置",
      balance: "余额",
      points: "积分",
      localCafes: "当地咖啡厅",
      partnerRewards: "合作伙伴奖励"
    },
    trolleys: {
      title: "可用手推车",
      trolleyA: "手推车A",
      trolleyB: "手推车B",
      trolleyC: "手推车C",
      available: "可用",
      full: "已满",
      slots: "位置"
    },
    footer: {
      copyright: "© 2024 TrayReturn. 版权所有。"
    },
    modals: {
      signIn: "登录",
      email: "邮箱",
      phone: "电话号码",
      cancel: "取消",
      selectTrolley: "选择手推车",
      interactiveMap: "交互式地图",
      availableTrolleys: "可用手推车",
      close: "关闭",
      bookShelf: "预订货架",
      availableShelves: "可用货架：",
      confirmTrayPlacement: "确认托盘放置",
      instructions: "说明：",
      sensorCheck: "传感器检查：",
      confirmPlacement: "确认放置",
      checkingPlacement: "检查放置",
      complete: "完成",
      placementConfirmed: "放置已确认",
      placementNotConfirmed: "放置未确认",
      earnedPoints: "您获得了10个奖励积分！",
      continue: "继续",
      tryAgain: "重试",
      localCafes: "当地咖啡厅",
      partnerRewards: "合作伙伴奖励",
      contactSupport: "联系支持"
    }
  },
  ko: {
    header: {
      title: "TrayReturn",
      contact: "문의하기"
    },
    howItWorks: {
      title: "사용 방법",
      step1: {
        title: "QR 코드 표시",
        description: "개인 계정에서 QR 코드를 열어 계산원에게 보여주세요. 휴대폰이 없다면 전화번호를 제공하여 트롤리를 등록하세요."
      },
      step2: {
        title: "빈 자리 선택",
        description: "음식을 다 드신 후 서비스로 가서 트롤리에서 빈 자리를 선택하고 트레이를 가져가세요."
      },
      step3: {
        title: "보상 획득",
        description: "지역 카페와 파트너 서비스에서 사용할 수 있는 보너스 포인트를 받으세요."
      }
    },
    hero: {
      title: "트레이 반납",
      subtitle: "쉽게 트레이를 반납하세요. 즉시 보상을 받으세요.",
      getStarted: "시작하기",
      returnTray: "트레이 반납",
      confirmPlacement: "배치 확인",
      balance: "잔액",
      points: "포인트",
      localCafes: "지역 카페",
      partnerRewards: "파트너 보상"
    },
    trolleys: {
      title: "사용 가능한 트롤리",
      trolleyA: "트롤리 A",
      trolleyB: "트롤리 B",
      trolleyC: "트롤리 C",
      available: "사용 가능",
      full: "가득 참",
      slots: "슬롯"
    },
    footer: {
      copyright: "© 2024 TrayReturn. 모든 권리 보유."
    },
    modals: {
      signIn: "로그인",
      email: "이메일",
      phone: "전화번호",
      cancel: "취소",
      selectTrolley: "트롤리 선택",
      interactiveMap: "인터랙티브 맵",
      availableTrolleys: "사용 가능한 트롤리",
      close: "닫기",
      bookShelf: "선반 예약",
      availableShelves: "사용 가능한 선반:",
      confirmTrayPlacement: "트레이 배치 확인",
      instructions: "안내:",
      sensorCheck: "센서 확인:",
      confirmPlacement: "배치 확인",
      checkingPlacement: "배치 확인 중",
      complete: "완료",
      placementConfirmed: "배치 확인됨",
      placementNotConfirmed: "배치 확인되지 않음",
      earnedPoints: "10 보너스 포인트를 획득했습니다!",
      continue: "계속",
      tryAgain: "다시 시도",
      localCafes: "지역 카페",
      partnerRewards: "파트너 보상",
      contactSupport: "지원 문의"
    }
  },
  ja: {
    header: {
      title: "TrayReturn",
      contact: "お問い合わせ"
    },
    howItWorks: {
      title: "使い方",
      step1: {
        title: "QRコードを表示",
        description: "個人アカウントからQRコードを開いてレジ係に見せてください。携帯電話がない場合は、電話番号を提供してトロリーを登録してください。"
      },
      step2: {
        title: "空いている場所を選択",
        description: "食事が終わったら、サービスに行き、カートで空いている場所を選択してトレイを取りに行ってください。"
      },
      step3: {
        title: "報酬を獲得",
        description: "地元のカフェやパートナーサービスで使用できるボーナスポイントを獲得してください。"
      }
    },
    hero: {
      title: "トレイ返却",
      subtitle: "簡単にトレイを返却。即座に報酬を獲得。",
      getStarted: "始める",
      returnTray: "トレイ返却",
      confirmPlacement: "配置確認",
      balance: "残高",
      points: "ポイント",
      localCafes: "地元カフェ",
      partnerRewards: "パートナー報酬"
    },
    trolleys: {
      title: "利用可能なトロリー",
      trolleyA: "トロリーA",
      trolleyB: "トロリーB",
      trolleyC: "トロリーC",
      available: "利用可能",
      full: "満杯",
      slots: "スロット"
    },
    footer: {
      copyright: "© 2024 TrayReturn. 全著作権所有。"
    },
    modals: {
      signIn: "サインイン",
      email: "メール",
      phone: "電話番号",
      cancel: "キャンセル",
      selectTrolley: "トロリー選択",
      interactiveMap: "インタラクティブマップ",
      availableTrolleys: "利用可能なトロリー",
      close: "閉じる",
      bookShelf: "棚を予約",
      availableShelves: "利用可能な棚:",
      confirmTrayPlacement: "トレイ配置確認",
      instructions: "説明:",
      sensorCheck: "センサーチェック:",
      confirmPlacement: "配置確認",
      checkingPlacement: "配置確認中",
      complete: "完了",
      placementConfirmed: "配置確認済み",
      placementNotConfirmed: "配置確認されていません",
      earnedPoints: "10ボーナスポイントを獲得しました！",
      continue: "続行",
      tryAgain: "再試行",
      localCafes: "地元カフェ",
      partnerRewards: "パートナー報酬",
      contactSupport: "サポートに連絡"
    }
  }
}

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showTrolleySelection, setShowTrolleySelection] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showTrayPlacement, setShowTrayPlacement] = useState(false)
  const [showCafeOptions, setShowCafeOptions] = useState(false)
  const [showRewards, setShowRewards] = useState(false)
  const [selectedCafe, setSelectedCafe] = useState<any>(null)
  const [showCafeMenu, setShowCafeMenu] = useState(false)
  const [selectedTrolley, setSelectedTrolley] = useState(null)
  const [selectedShelf, setSelectedShelf] = useState(null)
  const [showShelfBooking, setShowShelfBooking] = useState(false)
  const [showChecking, setShowChecking] = useState(false)
  const [checkingProgress, setCheckingProgress] = useState(0)
  const [checkingResult, setCheckingResult] = useState(null)
  const [bonusBalance] = useState(1250)
  const [language, setLanguage] = useState('en')
  const [isLoading, setIsLoading] = useState(false)
  const [showTrolleyList, setShowTrolleyList] = useState(false)
  const [mapTrolleyMarker, setMapTrolleyMarker] = useState(null)

  const t = content[language as keyof typeof content]

  // Get font class based on language
  const getFontClass = (lang: string) => {
    switch (lang) {
      case 'zh': return 'font-chinese'
      case 'ko': return 'font-korean'
      case 'ja': return 'font-japanese'
      case 'ru': return 'font-russian'
      default: return 'font-english'
    }
  }

  const [trolleys, setTrolleys] = useState([
    { 
      id: 1, 
      name: 'Trolley A', 
      location: 'Main Hall', 
      availableSlots: 3, 
      totalSlots: 12, 
      coordinates: { lat: 59.938951, lng: 30.285462 },
      bookedShelves: []
    },
    { 
      id: 2, 
      name: 'Trolley B', 
      location: 'Food Court', 
      availableSlots: 7, 
      totalSlots: 12, 
      coordinates: { lat: 59.939058, lng: 30.285817 },
      bookedShelves: []
    },
    { 
      id: 3, 
      name: 'Trolley C', 
      location: 'Student Center', 
      availableSlots: 0, 
      totalSlots: 12, 
      coordinates: { lat: 59.939058, lng: 30.285817 },
      bookedShelves: []
    },
  ])

  const cafes = [
    { id: 1, name: 'Café Central', options: ['Coffee - 50 pts', 'Sandwich - 100 pts', 'Salad - 80 pts', 'Soup - 90 pts', 'Dessert - 60 pts'] },
    { id: 2, name: 'Fresh Bites', options: ['Smoothie - 70 pts', 'Wrap - 120 pts', 'Pasta - 110 pts', 'Pizza slice - 95 pts', 'Juice - 40 pts'] },
    { id: 3, name: 'Quick Eats', options: ['Burger - 150 pts', 'Fries - 60 pts', 'Chicken - 130 pts', 'Fish - 140 pts', 'Veggie bowl - 85 pts'] },
    { id: 4, name: 'Garden Café', options: ['Tea - 30 pts', 'Croissant - 45 pts', 'Quiche - 75 pts', 'Soup - 65 pts', 'Cake - 55 pts'] },
    { id: 5, name: 'Spice Corner', options: ['Curry - 125 pts', 'Rice bowl - 95 pts', 'Naan - 35 pts', 'Samosa - 25 pts', 'Lassi - 50 pts'] },
    { id: 6, name: 'Pizza Palace', options: ['Margherita - 120 pts', 'Pepperoni - 140 pts', 'Vegetarian - 110 pts', 'Supreme - 160 pts', 'Garlic bread - 40 pts'] },
    { id: 7, name: 'Sushi Spot', options: ['California roll - 180 pts', 'Salmon roll - 200 pts', 'Veggie roll - 150 pts', 'Miso soup - 60 pts', 'Edamame - 40 pts'] },
    { id: 8, name: 'Burger Joint', options: ['Classic burger - 120 pts', 'Cheese burger - 140 pts', 'Veggie burger - 100 pts', 'Chicken burger - 130 pts', 'Onion rings - 50 pts'] },
    { id: 9, name: 'Healthy Choice', options: ['Acai bowl - 100 pts', 'Green smoothie - 80 pts', 'Protein bowl - 120 pts', 'Kale salad - 90 pts', 'Energy bar - 60 pts'] },
    { id: 10, name: 'Dessert Delight', options: ['Ice cream - 70 pts', 'Cheesecake - 90 pts', 'Brownie - 60 pts', 'Muffin - 45 pts', 'Cookie - 35 pts'] }
  ]

  const partnerRewards = [
    { id: 1, name: 'Music Streaming', description: 'Discount on subscription to music listening service', points: 200, discount: '20% off' },
    { id: 2, name: 'Food Delivery', description: 'Discount on plenty of food delivery orders', points: 150, discount: '15% off' },
    { id: 3, name: 'Gym Membership', description: 'Special rates for fitness center access', points: 300, discount: '25% off' },
    { id: 4, name: 'Movie Tickets', description: 'Discounted cinema tickets for latest releases', points: 100, discount: '30% off' },
    { id: 5, name: 'Online Shopping', description: 'Cashback on major e-commerce platforms', points: 250, discount: '10% cashback' },
    { id: 6, name: 'Transportation', description: 'Ride-sharing and public transport discounts', points: 80, discount: '15% off' },
    { id: 7, name: 'Books & Media', description: 'Digital content and book subscriptions', points: 120, discount: '20% off' },
    { id: 8, name: 'Travel', description: 'Hotel and flight booking discounts', points: 500, discount: '12% off' }
  ]


  const handleSignIn = (email: string, phone: string) => {
    setIsSignedIn(true)
    setShowSignIn(false)
  }

  const handleShelfBooking = (shelfNumber) => {
    if (selectedTrolley) {
      setTrolleys(prevTrolleys => 
        prevTrolleys.map(trolley => 
          trolley.id === selectedTrolley.id 
            ? { 
                ...trolley, 
                bookedShelves: [...trolley.bookedShelves, shelfNumber],
                availableSlots: trolley.availableSlots - 1
              }
            : trolley
        )
      )
      
      setSelectedShelf(shelfNumber)
      setShowShelfBooking(false)
      setShowTrayPlacement(true)
    }
  }

  const handleTrayPlacement = () => {
    setShowTrayPlacement(false)
    setShowChecking(true)
    setCheckingProgress(0)
    
    const interval = setInterval(() => {
      setCheckingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          const success = Math.random() > 0.2
          setCheckingResult(success ? 'success' : 'failure')
          return 100
        }
        return prev + 20
      })
    }, 1000)
  }

  const handleTrolleyClick = (trolley) => {
    setSelectedTrolley(trolley)
    setShowShelfBooking(true)
  }

  const handleTrolleySelection = (trolley) => {
    setSelectedTrolley(trolley)
    setMapTrolleyMarker(trolley)
    setShowTrolleyList(false)
    setShowShelfBooking(true)
  }

  const handleCafeSelection = (cafe) => {
    setSelectedCafe(cafe.name)
    setShowCafeMenu(true)
  }

  const resetChecking = () => {
    setShowChecking(false)
    setCheckingResult(null)
    setCheckingProgress(0)
    setSelectedTrolley(null)
    setSelectedShelf(null)
  }



  return (
    <main className={`min-h-screen bg-pink-50 text-gray-800 ${getFontClass(language)}`}>
      {/* Header */}
      <header className="bg-white border-b border-pink-200">
        <div className="container-max py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">{t.header.title}</h1>
            <div className="flex gap-4 items-center">
              {/* Language Switcher */}
              <div className="flex gap-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    language === 'en' ? 'bg-pink-300 text-gray-800' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    language === 'ru' ? 'bg-pink-300 text-gray-800' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    language === 'zh' ? 'bg-pink-300 text-gray-800' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  中文
                </button>
                <button
                  onClick={() => setLanguage('ko')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    language === 'ko' ? 'bg-pink-300 text-gray-800' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  한국어
                </button>
                <button
                  onClick={() => setLanguage('ja')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    language === 'ja' ? 'bg-pink-300 text-gray-800' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  日本語
                </button>
              </div>
              
              <button 
                onClick={() => setShowContact(!showContact)}
                className="bg-pink-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-pink-300 transition-colors"
              >
                {t.header.contact}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="bg-white py-12">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">{t.howItWorks.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">01</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">{t.howItWorks.step1.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {t.howItWorks.step1.description}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">02</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">{t.howItWorks.step2.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {t.howItWorks.step2.description}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">03</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">{t.howItWorks.step3.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {t.howItWorks.step3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-pink-100 py-16">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            {t.hero.title}
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto text-gray-600">
            {t.hero.subtitle}
          </p>
          
          {!isSignedIn ? (
            <button 
              onClick={() => setShowSignIn(true)}
              className="bg-pink-300 text-gray-800 px-8 py-3 text-lg font-medium hover:bg-pink-400 transition-colors rounded-lg"
            >
              {t.hero.getStarted}
            </button>
          ) : (
            <div className="space-y-6">
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => setShowTrolleyList(true)}
                  className="bg-pink-300 text-gray-800 px-6 py-3 font-medium hover:bg-pink-400 transition-colors rounded-lg"
                >
                  {t.hero.returnTray}
                </button>
                <button 
                  onClick={() => setShowTrayPlacement(true)}
                  className="border border-pink-300 text-gray-800 px-6 py-3 font-medium hover:bg-pink-300 transition-colors rounded-lg"
                >
                  {t.hero.confirmPlacement}
                </button>
              </div>
              
              {/* Balance Section */}
              <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-sm">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{t.hero.balance}</h3>
                  <div className="text-3xl font-bold text-pink-400 mb-4">{bonusBalance} {t.hero.points}</div>
                  <div className="flex gap-3 justify-center">
                    <button 
                      onClick={() => setShowCafeOptions(true)}
                      className="bg-pink-200 text-gray-800 px-4 py-2 font-medium hover:bg-pink-300 transition-colors rounded-lg text-sm"
                    >
                      {t.hero.localCafes}
                    </button>
                    <button 
                      onClick={() => setShowRewards(true)}
                      className="border border-pink-300 text-gray-800 px-4 py-2 font-medium hover:bg-pink-200 transition-colors rounded-lg text-sm"
                    >
                      {t.hero.partnerRewards}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="bg-white py-12">
        <div className="container-max">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">{t.trolleys.title}</h3>
          
          <div className="bg-pink-50 rounded-lg p-6">
            {/* Embedded OpenStreetMap with Dynamic Trolley Marker */}
            <div className="relative h-80 mb-6 rounded-lg overflow-hidden">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=30.284462%2C59.938451%2C30.286817%2C59.939558&layer=mapnik${mapTrolleyMarker ? `&marker=${mapTrolleyMarker.coordinates.lat}%2C${mapTrolleyMarker.coordinates.lng}` : ''}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {/* Selected Trolley Marker Overlay */}
              {mapTrolleyMarker && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute bg-pink-300 text-gray-800 px-3 py-2 text-sm font-bold rounded shadow-lg border-2 border-pink-400 ${
                    mapTrolleyMarker.id === 1 ? 'top-16 left-20' :
                    mapTrolleyMarker.id === 2 ? 'top-32 right-24' :
                    'bottom-20 left-16'
                  }`}>
                    {mapTrolleyMarker.name} - SELECTED
                  </div>
                </div>
              )}
            </div>
            
            {/* Trolley List */}
            <div className="grid md:grid-cols-3 gap-4">
              {trolleys.map((trolley) => (
                <div 
                  key={trolley.id}
                  className={`p-4 border-2 cursor-pointer transition-all rounded-lg ${
                    trolley.availableSlots > 0 
                      ? 'border-pink-200 hover:border-pink-300 hover:bg-pink-50' 
                      : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                  }`}
                  onClick={() => trolley.availableSlots > 0 && handleTrolleyClick(trolley)}
                >
                  <h4 className="text-lg font-bold mb-2 text-gray-800">{trolley.name}</h4>
                  <p className="text-sm mb-2 text-gray-600">{trolley.location}</p>
                  <p className="text-xs mb-2 text-gray-500">
                    {trolley.coordinates.lat}, {trolley.coordinates.lng}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${
                      trolley.availableSlots > 0 ? 'text-gray-800' : 'text-gray-400'
                    }`}>
                      {trolley.availableSlots}/{trolley.totalSlots} {t.trolleys.slots}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      trolley.availableSlots > 0 ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                    }`}>
                      {trolley.availableSlots > 0 ? t.trolleys.available : t.trolleys.full}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 py-8">
        <div className="container-max text-center">
          <p className="text-sm text-gray-600">{t.footer.copyright}</p>
        </div>
      </footer>

      {/* Modals */}
      {/* Trolley Selection Modal */}
      {showTrolleyList && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 p-6 max-w-md w-full mx-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{t.modals.selectTrolley}</h3>
            <p className="text-sm text-gray-600 mb-4">Choose a trolley to return your tray:</p>
            <div className="space-y-3">
              {trolleys.map((trolley) => (
                <button
                  key={trolley.id}
                  onClick={() => handleTrolleySelection(trolley)}
                  disabled={trolley.availableSlots === 0}
                  className={`w-full text-left p-4 border-2 rounded-lg transition-colors ${
                    trolley.availableSlots > 0 
                      ? 'border-pink-200 hover:border-pink-300 hover:bg-pink-50' 
                      : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{trolley.name}</h4>
                      <p className="text-sm text-gray-600">{trolley.location}</p>
                      <p className="text-xs text-gray-500">
                        {trolley.coordinates.lat}, {trolley.coordinates.lng}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${
                        trolley.availableSlots > 0 ? 'text-gray-800' : 'text-gray-400'
                      }`}>
                        {trolley.availableSlots}/{trolley.totalSlots} {t.trolleys.slots}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        trolley.availableSlots > 0 ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                      }`}>
                        {trolley.availableSlots > 0 ? t.trolleys.available : t.trolleys.full}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <button 
              onClick={() => setShowTrolleyList(false)}
              className="bg-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-400 transition-colors w-full mt-4 rounded-lg"
            >
              {t.modals.close}
            </button>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 p-6 max-w-sm w-full mx-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{t.modals.signIn}</h3>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target as HTMLFormElement)
              handleSignIn(formData.get('email') as string, formData.get('phone') as string)
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">{t.modals.email}</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t.modals.phone}</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="bg-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-400 transition-colors rounded-lg flex-1">
                  {t.modals.signIn}
                </button>
                <button 
                  type="button"
                  onClick={() => setShowSignIn(false)}
                  className="border border-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-100 transition-colors rounded-lg flex-1"
                >
                  {t.modals.cancel}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contact Support Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 p-6 max-w-sm w-full mx-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{t.modals.contactSupport}</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">{t.modals.email}</p>
                <p className="font-medium">support@trayreturn.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{t.modals.phone}</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            <button 
              onClick={() => setShowContact(false)}
              className="bg-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-400 transition-colors w-full mt-4 rounded-lg"
            >
              {t.modals.close}
            </button>
          </div>
        </div>
      )}

      {/* Shelf Booking Modal */}
      {showShelfBooking && selectedTrolley && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 p-6 max-w-md w-full mx-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{t.modals.bookShelf}</h3>
            <p className="text-sm text-gray-600 mb-4">{t.modals.availableShelves}</p>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {Array.from({ length: 12 }, (_, i) => i + 1).map(shelfNumber => {
                const isBooked = selectedTrolley.bookedShelves.includes(shelfNumber)
                return (
                  <button
                    key={shelfNumber}
                    onClick={() => !isBooked && handleShelfBooking(shelfNumber)}
                    disabled={isBooked}
                    className={`p-3 text-sm font-medium rounded-lg transition-colors ${
                      isBooked 
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                        : 'bg-pink-300 text-gray-800 hover:bg-pink-400'
                    }`}
                  >
                    {shelfNumber}
                  </button>
                )
              })}
            </div>
            <button 
              onClick={() => setShowShelfBooking(false)}
              className="bg-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-400 transition-colors w-full rounded-lg"
            >
              {t.modals.close}
            </button>
          </div>
        </div>
      )}

      {/* Tray Placement Confirmation Modal */}
      {showTrayPlacement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 p-6 max-w-md w-full mx-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{t.modals.confirmTrayPlacement}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">{t.modals.instructions}</h4>
                <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                  <li>Check trolley matches to booked one</li>
                  <li>Check shelf matches to booked one</li>
                  <li>Check the tray position</li>
                </ol>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t.modals.sensorCheck}</h4>
                <p className="text-sm text-gray-600">Place your tray in the selected shelf and confirm placement</p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button 
                onClick={handleTrayPlacement}
                className="bg-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-400 transition-colors rounded-lg flex-1"
              >
                {t.modals.confirmPlacement}
              </button>
              <button 
                onClick={() => setShowTrayPlacement(false)}
                className="border border-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-100 transition-colors rounded-lg flex-1"
              >
                {t.modals.cancel}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checking Progress Modal */}
      {showChecking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 p-6 max-w-sm w-full mx-4 rounded-lg text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-pink-300 rounded-full mx-auto mb-4 animate-spin"></div>
            <h3 className="text-xl font-bold mb-2">{t.modals.checkingPlacement}</h3>
            <div className="bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-pink-300 h-2 rounded-full transition-all duration-300"
                style={{ width: `${checkingProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">{checkingProgress}% Complete</p>
          </div>
        </div>
      )}

      {/* Checking Result Modal */}
      {checkingResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 p-6 max-w-sm w-full mx-4 rounded-lg text-center">
            {checkingResult === 'success' ? (
              <>
                <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-600">{t.modals.placementConfirmed}</h3>
                <p className="text-sm text-gray-600 mb-4">{t.modals.earnedPoints}</p>
                <button 
                  onClick={resetChecking}
                  className="bg-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-400 transition-colors rounded-lg"
                >
                  {t.modals.continue}
                </button>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-600">{t.modals.placementNotConfirmed}</h3>
                <p className="text-sm text-gray-600 mb-4">Please check your tray placement and try again</p>
                <button 
                  onClick={resetChecking}
                  className="bg-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-400 transition-colors rounded-lg"
                >
                  {t.modals.tryAgain}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Local Cafes Modal */}
      {showCafeOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 p-6 max-w-lg w-full mx-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{t.modals.localCafes}</h3>
            
            {!selectedCafe ? (
              // Cafe Selection Dropdown
              <div className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">Select a cafe to view menu and discounts:</p>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {cafes.map((cafe) => (
                    <button
                      key={cafe.id}
                      onClick={() => setSelectedCafe(cafe)}
                      className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-pink-50 hover:border-pink-300 transition-colors"
                    >
                      <h4 className="font-medium">{cafe.name}</h4>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Selected Cafe Menu with Balance-Based Discounts
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">{selectedCafe.name}</h4>
                  <button 
                    onClick={() => setSelectedCafe(null)}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    ← Back to cafes
                  </button>
                </div>
                
                <div className="bg-pink-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-600">Your balance: <span className="font-bold text-pink-400">{bonusBalance} points</span></p>
                </div>
                
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {selectedCafe.options.map((option, index) => {
                    const [item, pointsStr] = option.split(' - ')
                    const points = parseInt(pointsStr.replace(' pts', ''))
                    const canAfford = bonusBalance >= points
                    const discount = Math.floor(points * 0.1) // 10% discount
                    const discountedPoints = Math.max(1, points - discount)
                    
                    return (
                      <div key={index} className={`border rounded-lg p-3 ${canAfford ? 'border-pink-200 bg-pink-50' : 'border-gray-200 bg-gray-50'}`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h5 className="font-medium">{item}</h5>
                            <div className="text-sm text-gray-600 mt-1">
                              <div className="flex items-center gap-2">
                                <span className={canAfford ? 'line-through text-gray-400' : ''}>{points} pts</span>
                                {canAfford && (
                                  <>
                                    <span className="text-pink-400 font-bold">{discountedPoints} pts</span>
                                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">-{discount} pts discount!</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <button 
                            disabled={!canAfford}
                            className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                              canAfford 
                                ? 'bg-pink-300 text-gray-800 hover:bg-pink-400' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            {canAfford ? 'Order' : 'Insufficient'}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
            
            <button 
              onClick={() => {
                setShowCafeOptions(false)
                setSelectedCafe(null)
              }}
              className="bg-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-400 transition-colors w-full mt-4 rounded-lg"
            >
              {t.modals.close}
            </button>
          </div>
        </div>
      )}

      {/* Partner Rewards Modal */}
      {showRewards && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 p-6 max-w-lg w-full mx-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{t.modals.partnerRewards}</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {partnerRewards.map((reward) => (
                <div key={reward.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{reward.name}</h4>
                    <span className="text-sm bg-pink-200 text-gray-800 px-2 py-1 rounded">
                      {reward.points} pts
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
                  <div className="text-sm font-medium text-pink-400">{reward.discount}</div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setShowRewards(false)}
              className="bg-pink-300 text-gray-800 px-6 py-2 font-medium hover:bg-pink-400 transition-colors w-full mt-4 rounded-lg"
            >
              {t.modals.close}
            </button>
          </div>
        </div>
      )}
    </main>
  )
}


