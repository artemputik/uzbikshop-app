// Показываем определенный экран
function showScreen(screenId) {
    // Скрываем все экраны
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показываем нужный экран
    document.getElementById(screenId).classList.add('active');
}

// Информация о продуктах
function showProductInfo(type, productId) {
    const productInfo = {
        bot: {
            sales: {
                title: "🤖 ПРОДАЮЩИЙ БОТ",
                description: "Идеально для онлайн-продаж:\n• Каталог товаров/услуг\n• Корзина и оформление заказов\n• Уведомления в Telegram\n• База данных клиентов",
                price: "50 звёзд",
                features: ["Автоматические уведомления", "Готовые шаблоны", "Поддержка 7 дней"],
                contact: "@твой_ник"
            },
            info: {
                title: "📊 ИНФОРМАЦИОННЫЙ БОТ",
                description: "Для контента и уведомлений:\n• Автоматические рассылки\n• FAQ и база знаний\n• Управление расписанием\n• Медиа-контент",
                price: "30 звёзд", 
                features: ["Неограниченные подписчики", "Гибкие настройки", "Простая панель"],
                contact: "@твой_ник"
            },
            custom: {
                title: "⚙️ КАСТОМНЫЙ БОТ",
                description: "Уникальное решение под ваши задачи:\n• Индивидуальный функционал\n• Интеграции с API\n• Собственный дизайн\n• Техническая поддержка",
                price: "Индивидуальный расчёт",
                features: ["Полный контроль", "Техническая документация", "Приоритетная поддержка"],
                contact: "@твой_ник"
            }
        },
        currency: {
            uc: {
                title: "🎯 UC (PUBG MOBILE)",
                description: "Быстрая и безопасная доставка UC:\n• Мгновенная отправка\n• Любой объём доступен\n• Гарантия безопасности аккаунта\n• Поддержка 24/7",
                price: "от 90₽ за 60 UC",
                features: ["Моментальная доставка", "Любые сервера", "Конфиденциальность"],
                contact: "@ник_друга"
            },
            gold: {
                title: "⭐ ГОЛДА (STANDOFF 2)",
                description: "Пополнение счета Standoff 2:\n• Онлайн-оплата\n• Автоматическая доставка\n• Безопасно и анонимно\n• Работаем круглосуточно", 
                price: "от 50₽ за 1000 голды",
                features: ["Автоматическая выдача", "Без VPN", "Прямые поставки"],
                contact: "@ник_друга"
            },
            other: {
                title: "🎲 ДРУГАЯ ВАЛЮТА",
                description: "Широкий выбор игровых валют:\n• GTA Online $\n• CS:GO скины и ключи\n• Valorant Points\n• И многое другое!",
                price: "Уточняйте в поддержке", 
                features: ["Разные игры", "Гибкая система скидок", "Быстрый подбор"],
                contact: "@ник_друга"
            }
        }
    };

    const product = productInfo[type][productId];
    
    const message = `
${product.title}

${product.description}

💵 Стоимость: ${product.price}

✨ Особенности:
${product.features.map(f => `• ${f}`).join('\n')}

👨‍💼 Для заказа: ${product.contact}

UzbikShop — с любовью к клиентам 💜
    `;

    alert(message);
}

// Открыть Telegram
function openTelegram(username) {
    if (Telegram && Telegram.WebApp) {
        Telegram.WebApp.openTelegramLink(`https://t.me/${username}`);
    } else {
        window.open(`https://t.me/${username}`, '_blank');
    }
}

// Инициализация Telegram Web App
if (Telegram && Telegram.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
}

// Показываем главный экран при загрузке
document.addEventListener('DOMContentLoaded', function() {
    showScreen('mainMenu');
});