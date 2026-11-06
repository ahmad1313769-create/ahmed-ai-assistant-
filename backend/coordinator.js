// backend/coordinator.js
// منسق النماذج الذكية (يدير التوجيه بين ChatGPT و Gemini مع تطبيق الشخصية)

const { getSystemPrompt } = require('./persona');

class ModelCoordinator {
    async processRequest(message, context = {}) {
        try {
            const systemPrompt = getSystemPrompt();
            
            // محاكاة استجابة منسقة تدعم الشخصية السورية وروح المساعد
            // سيتم ربط مفاتيح الـ APIs الفعلية هنا لاحقاً حسب الطلب
            const responseMessage = `أهلاً يا أحمد! استلمت رسالتك: "${message}". الأمور ماشية بالسليم، والسيرفر جاهز ينفذ طلباتك باللهجة السورية وبأفضل أداء! 🚀`;

            return {
                modelUsed: "Ahmed's Assistant Core Coordinator",
                reply: responseMessage,
                systemPromptApplied: systemPrompt,
                timestamp: new Date().toISOString()
            };

        } catch (error) {
            console.error("خطأ في المنسق:", error);
            throw new Error("فشل معالجة الطلب عبر المنسق المركزي.");
        }
    }
}

module.exports = new ModelCoordinator();
