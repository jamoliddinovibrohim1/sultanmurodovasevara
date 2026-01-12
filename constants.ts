
import { ComparisonData, GrowthData, PerceptionData } from './types';

export const COMPARISON_DATA: ComparisonData[] = [
  { name: 'Qisqa muddat', reklama: 85, pr: 65 },
  { name: 'Uzoq muddat', reklama: 45, pr: 90 },
];

export const GROWTH_DATA: GrowthData[] = [
  { period: 'Boshlanish', ishonch: 40, loyaqlik: 30 },
  { period: '1 oy', ishonch: 60, loyaqlik: 55 },
  { period: '3 oy', ishonch: 75, loyaqlik: 70 },
  { period: '6 oy', ishonch: 90, loyaqlik: 88 },
];

export const PERCEPTION_DATA: PerceptionData[] = [
  { name: 'Ijobiy', value: 70, color: '#10b981' },
  { name: 'Neytral', value: 20, color: '#f59e0b' },
  { name: 'Salbiy', value: 10, color: '#ef4444' },
];

export const APP_CONTENT = {
  title: "PR loyihalari orqali mahsulot yoki xizmat brendini bozorga olib kirish va ommalashtirish xususiyatlari",
  subtitle: "Emperor loyihasi misolida empirik tahlil",
  sections: {
    intro: "Hozirgi kunda bozor munosabatlarining rivojlanishi va raqobatning kuchayishi sharoitida mahsulot yoki xizmatni bozorga olib kirish jarayoni murakkablashib bormoqda. Shu jihatdan PR (Public Relations) loyihalari brendni bozorga olib kirish va uni ommalashtirishda muhim ahamiyat kasb etadi.",
    methodology: "Empirik tahlil davomida Emperor loyihasida olib borilgan PR va reklama faoliyati solishtirildi. Auditoriya reaksiyasi, raqamli platformalardagi faollik hamda ommaviy axborot vositalarida berilgan materiallar tahlil qilindi.",
    analysis: "Empirik ma’lumotlarga ko‘ra, reklama faoliyati qisqa muddatli e’tibor jalb qilishga xizmat qilgan bo‘lsa, PR loyihalari uzoq muddatli ishonch va ijobiy imij shakllantirishga yo‘naltirilgan.",
    trust: "Empirik kuzatuvlarga asoslanib, PR loyihalari auditoriya ishonchi va brendga bo‘lgan sodiqlikni bosqichma-bosqich oshirgan. Bu PR loyihalarining uzoq muddatli kommunikatsion samaradorligini ko‘rsatadi.",
    perception: "PR loyihalari natijasida Emperor brendining auditoriya ongida qanday qabul qilingani ham empirik tahlil qilindi. Auditoriyaning asosiy qismi Emperor brendini ijobiy qabul qilgan.",
    conclusion: "O‘tkazilgan empirik tahlil shuni ko‘rsatdiki, PR loyihalari mahsulot yoki xizmat brendini bozorga olib kirish va ommalashtirishda muhim ahamiyatga ega. Emperor loyihasi misolida PR faoliyati orqali brendga nisbatan ijobiy imij va auditoriya ishonchi shakllangani aniqlandi."
  }
};
