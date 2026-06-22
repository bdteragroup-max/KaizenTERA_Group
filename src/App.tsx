import React, { useState, useEffect } from 'react';
import teraLogo from './Logo_TERA_WH.png';
import {
  Play,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Users,
  FileText,
  Sparkles,
  ArrowRight,
  Check,
  Clock,
  Shield,
  Smile,
  AlertTriangle,
  RefreshCw,
  Zap,
  Wrench,
  ShoppingBag,
  FileCheck,
  User,
  Layers,
  Award,
  Copy,
  CheckCircle2,
  HelpCircle,
  Footprints,
  Lightbulb,
  Search,
  ClipboardCheck,
  Truck,
  Settings,
  Package,
  XCircle,
  X,
  Lock,
  Unlock
} from 'lucide-react';

// URL ของ Google Apps Script Web App สำหรับส่งข้อมูลเข้า Google Sheets
const GOOGLE_SHEET_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbw-09djXeyZ5xg8NNaMhJiMkIMZMFbu4btf0o2T-z2Pl7OSJeMtgfnf8Yyu_t_p9-1FEQ/exec';

const PRESENTATION_SLIDES = [
  {
    id: 'intro',
    title: 'ไคเซ็น (Kaizen) คืออะไร?',
    subtitle: 'ปรับปรุงทีละนิด... เพื่อชีวิตการทำงานที่ง่ายขึ้น',
    icon: <Sparkles className="w-12 h-12 text-red-600 animate-pulse" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-neutral-700 leading-relaxed">
          คำว่า <span className="text-red-600 font-bold text-xl">"ไคเซ็น" (改善)</span> มาจากภาษาญี่ปุ่น แปลตรงตัวว่า <span className="text-neutral-900 font-semibold text-xl">"การเปลี่ยนแปลงที่ดีขึ้น"</span> หรือการปรับปรุงอย่างต่อเนื่อง
        </p>
        <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
          <h4 className="text-md font-bold text-neutral-900 mb-2 flex items-center gap-2">
            <Check className="text-red-600 w-5 h-5" /> กฎเหล็กของไคเซ็นที่ทุกคนต้องจำ:
          </h4>
          <p className="text-neutral-700 text-lg">
            "ไม่ใช่การลงทุนก้อนโตเพื่อเปลี่ยนระบบใหม่ทั้งหมด แต่คือการ <strong className="text-red-600 font-extrabold">ปรับปรุงเรื่องเล็กๆ น้อยๆ รอบตัว ทำทุกวัน</strong> จนงานของเราง่ายขึ้น ปลอดภัยขึ้น และเร็วขึ้น"
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-neutral-100 p-4 rounded-xl border border-neutral-200 text-center shadow-sm flex flex-col items-center justify-center">
            <Footprints className="w-10 h-10 text-red-600 mb-1" />
            <p className="text-sm text-neutral-800 mt-2 font-semibold">ลดเวลาเดินหาของ 1 นาที</p>
          </div>
          <div className="bg-neutral-100 p-4 rounded-xl border border-neutral-200 text-center shadow-sm flex flex-col items-center justify-center">
            <FileText className="w-10 h-10 text-neutral-700 mb-1" />
            <p className="text-sm text-neutral-800 mt-2 font-semibold">ลดขั้นตอนกรอกกระดาษ 1 ใบ</p>
          </div>
          <div className="bg-neutral-100 p-4 rounded-xl border border-neutral-200 text-center shadow-sm flex flex-col items-center justify-center">
            <Lightbulb className="w-10 h-10 text-red-600 mb-1 animate-pulse" />
            <p className="text-sm text-neutral-800 mt-2 font-semibold">จัดระเบียบสายไฟให้หยิบง่ายขึ้น</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'why',
    title: 'ทำไมพวกเราต้องทำไคเซ็น?',
    subtitle: 'สิทธิประโยชน์และความสุขของคนทำงาน',
    icon: <Smile className="w-12 h-12 text-red-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-neutral-700">
          หลายคนอาจจะคิดว่าทำไคเซ็นแล้วได้ประโยชน์เฉพาะบริษัท แต่ความจริงแล้ว **คนทำงานคือคนที่ได้ประโยชน์มากที่สุด!**
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 p-4 bg-neutral-100/80 rounded-xl border border-neutral-200">
            <div className="p-3 bg-red-600/10 rounded-lg text-red-600">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900">งานเสร็จไวขึ้น เหนื่อยน้อยลง</h4>
              <p className="text-neutral-600 text-sm mt-1">ขจัดขั้นตอนที่ซ้ำซ้อน ไม่ต้องเสียเวลากับงานเดิมๆ ที่น่าเบื่อ</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-neutral-100/80 rounded-xl border border-neutral-200">
            <div className="p-3 bg-neutral-200 rounded-lg text-neutral-700">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900">ทำงานอย่างปลอดภัย</h4>
              <p className="text-neutral-600 text-sm mt-1">ลดความเสี่ยงการเกิดอุบัติเหตุหน้างาน หรือความผิดพลาดในระบบไฟฟ้า</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-neutral-100/80 rounded-xl border border-neutral-200">
            <div className="p-3 bg-neutral-200 rounded-lg text-neutral-700">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900">มีโอกาสเสนอไอเดีย</h4>
              <p className="text-neutral-600 text-sm mt-1">เสียงของทุกคนมีความหมายเท่ากัน ไม่ว่าจะอยู่ตำแหน่งใดก็ตาม</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-neutral-100/80 rounded-xl border border-neutral-200">
            <div className="p-3 bg-red-600/10 rounded-lg text-red-600">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900">มีรางวัลและคำชื่นชม</h4>
              <p className="text-neutral-600 text-sm mt-1">ไอเดียไคเซ็นที่ได้รับการอนุมัติและทำจริง จะได้รับคะแนนสะสมหรือของรางวัลพิเศษ</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'formula',
    title: 'หัวใจทองคำ 3 ข้อ: เลิก - ลด - เปลี่ยน',
    subtitle: 'สูตรสำเร็จง่ายๆ ที่ใครก็หยิบไปใช้ได้ทันที',
    icon: <RefreshCw className="w-12 h-12 text-neutral-500 animate-spin-slow" />,
    content: (
      <div className="space-y-6">
        <p className="text-neutral-700">
          เมื่อเจอขั้นตอนทำงานที่ยุ่งยาก ซับซ้อน หรือน่าหงุดหงิด ให้เราตั้งคำถาม 3 ข้อนี้เรียงลำดับกันไป:
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              1
            </div>
            <div>
              <h4 className="text-red-600 font-bold text-lg">เลิก (Eliminate)</h4>
              <p className="text-neutral-700 text-sm">"ขั้นตอนนี้ยกเลิกไปเลยได้ไหม?" ถ้างานชิ้นนี้ไม่ได้ส่งผลดีกับใคร หรือไม่มีใครใช้ประโยชน์จากมันอีกแล้ว ให้ตัดออกไปเลยไม่ต้องทำ</p>
            </div>
          </div>

          <div className="p-4 bg-neutral-100 border border-neutral-200 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              2
            </div>
            <div>
              <h4 className="text-neutral-800 font-bold text-lg">ลด (Reduce)</h4>
              <p className="text-neutral-700 text-sm">"ถ้าเลิกไม่ได้ ลดจำนวนลงได้ไหม?" เช่น ลดเวลาการพิมพ์ลง, ลดขั้นตอนประสานงาน, ลดจำนวนการใช้เอกสารกระดาษ</p>
            </div>
          </div>

          <div className="p-4 bg-neutral-100 border border-neutral-200 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-lg shrink-0">
              3
            </div>
            <div>
              <h4 className="text-neutral-900 font-bold text-lg">เปลี่ยน (Change)</h4>
              <p className="text-neutral-700 text-sm">"เปลี่ยนไปใช้วิธีที่ดีกว่านี้ได้ไหม?" เช่น เปลี่ยนจากการจดกระดาษมาพิมพ์ผ่านมือถือ, เปลี่ยนมาใช้เครื่องมือสำเร็จรูป หรือเปลี่ยนขั้นตอนการประกอบตู้ควบคุม</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '7wastes',
    title: 'มองหา 7 ความสูญเปล่า (7 Wastes) รอบตัวเรา',
    subtitle: 'ศัตรูร้ายที่แอบขโมยเวลาทำงานของเราไปในแต่ละวัน',
    icon: <AlertTriangle className="w-12 h-12 text-red-600" />,
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 text-sm">
          ลองสังเกตดูว่า ในแผนกของคุณมีอาการเหล่านี้อยู่บ้างหรือไม่? ถ้ามี... นั่นคือโอกาสที่คุณจะทำไคเซ็นได้ทันที!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
            <h5 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-600 shrink-0" /> 1. การรอคอย (Waiting)
            </h5>
            <p className="text-neutral-600 text-xs mt-1">รอหัวหน้าอนุมัติแบบ, รอรถจัดส่งอะไหล่, รอระบบโหลดข้อมูล</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
            <h5 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-red-600 shrink-0" /> 2. งานแก้ไข/ความผิดพลาด (Defects)
            </h5>
            <p className="text-neutral-600 text-xs mt-1">เข้าหัวสายไฟผิดตู้ทำให้ตู้ช็อต, คีย์ขนาดกำลังอินเวอร์เตอร์ผิดในใบเสนอราคา</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
            <h5 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <Footprints className="w-4 h-4 text-red-600 shrink-0" /> 3. การเคลื่อนไหวที่สูญเปล่า (Motion)
            </h5>
            <p className="text-neutral-600 text-xs mt-1">เดินไปเก็บของไกลๆ บ่อยครั้ง, หาไฟล์สินค้าไม่เจอในคอมพิวเตอร์เพราะปนเปกัน</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
            <h5 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-red-600 shrink-0" /> 4. ขั้นตอนที่มากเกินไป (Over-processing)
            </h5>
            <p className="text-neutral-600 text-xs mt-1">ต้องเขียนชื่อลูกค้าลงบนกระดาษ 3 ใบที่ส่งต่อกันภายในบริษัท</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
            <h5 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <Package className="w-4 h-4 text-red-600 shrink-0" /> 5. เก็บของเกินจำเป็น (Inventory)
            </h5>
            <p className="text-neutral-600 text-xs mt-1">สั่งตลับลูกปืนหรือชิ้นส่วนอะไหล่มาเก็บไว้ในคลังมากเกินไปจนหาจุดเก็บหลักไม่เจอ</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
            <h5 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <Truck className="w-4 h-4 text-red-600 shrink-0" /> 6. การขนย้ายที่ซ้ำซ้อน (Transportation)
            </h5>
            <p className="text-neutral-600 text-xs mt-1">เดินขึ้นลงชั้น 2 เพื่อส่งใบเสนอราคาแบบแผ่นทีละใบ แทนที่จะรวบรวมหรือส่งออนไลน์</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 col-span-1 md:col-span-2">
            <h5 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <Settings className="w-4 h-4 text-red-600 shrink-0" /> 7. ทำมากเกินไป (Overproduction)
            </h5>
            <p className="text-neutral-600 text-xs mt-1">ปริ้นต์คู่มือสินค้าเตรียมไว้เผื่อเป็นปึกใหญ่ๆ แต่สุดท้ายสเปกเปลี่ยน ต้องทิ้งทั้งหมด</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'steps',
    title: '4 ขั้นตอนเริ่มทำไคเซ็นได้ทันที',
    subtitle: 'จากไอเดียเล็กๆ สู่มาตรฐานการทำงานใหม่',
    icon: <Layers className="w-12 h-12 text-neutral-700" />,
    content: (
      <div className="space-y-6">
        <p className="text-neutral-700">
          ไม่ยากเลยครับ! ทุกคนสามารถเริ่มทำไคเซ็นได้ด้วยแนวคิด **PDCA** ตามขั้นตอนนี้:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-center relative shadow-sm flex flex-col items-center justify-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-600 text-white font-bold px-3 py-1 text-xs rounded-full">
              ขั้นตอนที่ 1
            </span>
            <Search className="w-8 h-8 text-neutral-600 mb-2 mt-3" />
            <h5 className="font-bold text-neutral-900 text-sm">มองหาปัญหา</h5>
            <p className="text-neutral-600 text-xs mt-1">อะไรที่รู้สึกยุ่งยาก เสียเวลา หรือทำงานไม่สะดวก</p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-center relative shadow-sm flex flex-col items-center justify-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white font-bold px-3 py-1 text-xs rounded-full">
              ขั้นตอนที่ 2
            </span>
            <Lightbulb className="w-8 h-8 text-red-600 mb-2 mt-3 animate-pulse" />
            <h5 className="font-bold text-red-600 text-sm">เสนอวิธีแก้</h5>
            <p className="text-neutral-600 text-xs mt-1">คิดวิธีเปลี่ยนที่ง่ายที่สุด ไม่ต้องใช้เงินเยอะ</p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-center relative shadow-sm flex flex-col items-center justify-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-900 text-white font-bold px-3 py-1 text-xs rounded-full">
              ขั้นตอนที่ 3
            </span>
            <Wrench className="w-8 h-8 text-neutral-800 mb-2 mt-3" />
            <h5 className="font-bold text-neutral-800 text-sm">ทดลองทำ</h5>
            <p className="text-neutral-600 text-xs mt-1">ลองใช้งานจริง แล้วดูว่าผลลัพธ์ดีขึ้นหรือเร็วขึ้นไหม</p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-center relative shadow-sm flex flex-col items-center justify-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white font-bold px-3 py-1 text-xs rounded-full">
              ขั้นตอนที่ 4
            </span>
            <ClipboardCheck className="w-8 h-8 text-red-600 mb-2 mt-3" />
            <h5 className="font-bold text-red-600 text-sm">เขียนบัตรไคเซ็น</h5>
            <p className="text-neutral-600 text-xs mt-1">สรุปแบบ ก่อน-หลัง เพื่อทำเป็นมาตรฐานและรับคะแนน</p>
          </div>
        </div>
      </div>
    )
  }
];

const DEPARTMENTS = [
  {
    id: 'eng',
    name: 'ฝ่ายวิศวกรรม & บริการ (Engineering / Service)',
    icon: <Wrench className="w-5 h-5" />,
    color: 'border-red-600 bg-red-50 text-red-600',
    details: 'เน้นความปลอดภัย การหยิบใช้เครื่องมือ ความแม่นยำในการประกอบ และประหยัดเวลาหน้างาน',
    examples: [
      {
        problem: 'ช่างประกอบตู้คอนโทรล เดินหาประแจ คีม บ่อยๆ เพราะวางสลับและปนกันในรถกระบะบริการหน้างาน ทำให้เสียเวลาประกอบตู้นานเกินไป',
        solution: 'ทำระบบบอร์ดเก็บเครื่องมือแบบเงาและระบุสัญลักษณ์ (Shadow Board) บนกล่องเครื่องมือในรถช่าง',
        result: 'ประหยัดเวลาค้นหาเครื่องมือได้วันละ 30 นาที และหมดปัญหาลืมทิ้งเครื่องมือไว้หน้างานลูกค้า'
      },
      {
        problem: 'เวลาทดสอบบอร์ดอินเวอร์เตอร์ชำรุดของลูกค้า ต้องจดข้อมูลสเปกลงสมุดบันทึกย้อนหลังทุกเครื่องเพื่อตรวจสอบประวัติ',
        solution: 'สร้างแบบฟอร์มตรวจสอบสแกนรหัสผ่าน QR Code ยึดกับตัวเครื่องสแกนกรอกผ่านมือถือได้ทันที',
        result: 'ตัดขั้นตอนการจดซ้ำซ้อน ลดเวลาลงทะเบียนจาก 15 นาที เหลือเพียง 2 นาทีต่อเครื่อง'
      }
    ]
  },
  {
    id: 'sales',
    name: 'ฝ่ายขาย & เซลส์เอ็นจิเนียร์ (Sales & Admin)',
    icon: <User className="w-5 h-5" />,
    color: 'border-neutral-400 bg-neutral-100 text-neutral-700',
    details: 'เน้นความรวดเร็วในการบริการ ข้อมูลสินค้าแม่นยำ ตอบคำถามและออกใบเสนอราคาให้ลูกค้าทันท่วงที',
    examples: [
      {
        problem: 'ลูกค้าสอบถามราคารุ่นของอินเวอร์เตอร์ (Inverter) ที่ใช้บ่อย เซลส์ต้องโทรเช็กฝ่ายสต็อกหรือเปิดตารางซับซ้อน ทำให้ได้ราคาช้า ลูกค้าไปซื้อเจ้าอื่นก่อน',
        solution: 'จัดทำคู่มือราคากลางอ้างอิงด่วน (Quick Pricing Reference Guide) สำหรับอินเวอร์เตอร์ 10 รุ่นยอดนิยม อัปเดตผ่านคลาวด์แชร์ร่วมกัน',
        result: 'เซลส์ตอบราคาและสเปกพื้นฐานของลูกค้าได้ทันทีภายในสายโทรศัพท์โดยไม่ต้องรอประสานงาน'
      },
      {
        problem: 'การกรอกรายละเอียดโปรเจกต์งานติดตั้งโซลาร์รูฟท็อปในระบบ เสนอราคาคลาดเคลื่อนบ่อยเพราะขาดข้อมูลสำคัญเชิงเทคนิคจากลูกค้า',
        solution: 'จัดทำแบบฟอร์มตอบรับคำถามและเกณฑ์เช็กเบื้องต้น (Initial Assessment Checklist Form) บังคับกรอกข้อมูลสำคัญ 5 ข้อก่อนส่งแผนกออกแบบ',
        result: 'งานวิศวกรรมออกแบบได้ถูกต้องและรวดเร็วขึ้นถึง 50% แทบไม่มีใบเสนอราคาแก้ซ้ำรอบสอง'
      }
    ]
  },
  {
    id: 'warehouse',
    name: 'ฝ่ายคลังสินค้า & จัดซื้อ (Warehouse / Purchasing)',
    icon: <ShoppingBag className="w-5 h-5" />,
    color: 'border-neutral-300 bg-neutral-50 text-neutral-800',
    details: 'เน้นการจัดเก็บที่เป็นระเบียบ ตรวจสอบสต็อกง่าย การไหลเวียนชิ้นส่วนคล่องตัว ไม่เกิดของค้างเกินจำเป็น',
    examples: [
      {
        problem: 'วัสดุชิ้นเล็ก เช่น คอนแทกเตอร์ (Contactor) หรือฟิวส์ขนาดต่างๆ ปะปนกันในลิ้นชัก ค้นหาแต่ละครั้งกินเวลานาน และสั่งสต็อกซ้ำบ่อยครั้ง',
        solution: 'จัดทำกล่องแยกช่องใส ปิดป้ายระบุขนาดและรหัส พร้อมขีดเส้นจุดสั่งซื้อฉุกเฉิน (Re-order level marker) แถบสีแดงก้นกล่อง',
        result: 'จัดสต็อกได้เป็นระเบียบชัดเจน ค้นหาของเสร็จสิ้นใน 10 วินาที ป้องกันการสั่งสินค้าล้นคลังแบบซ้ำซ้อน'
      },
      {
        problem: 'กระดาษนำส่งชิ้นส่วนเบิกช่างกระจัดกระจาย หายบ่อย ทำบัญชีและคำนวณต้นทุนโปรเจกต์ล่าช้า',
        solution: 'วางถาดกระดาษจำแนกสีตามสถานะงาน (แดง = รอเตรียม, เทา = รอรวบรวม, ขาว = จ่ายของเสร็จสิ้น)',
        result: 'ทุกคนเห็นภาพตรงกันทันที ค้นหาเอกสารจ่ายของได้ง่าย และบัญชีทำงานปิดเคสได้ตรงเวลาขึ้น'
      }
    ]
  },
  {
    id: 'office',
    name: 'ฝ่ายสนับสนุน & บัญชี (Office / Back-office / HR)',
    icon: <FileCheck className="w-5 h-5" />,
    color: 'border-red-500 bg-red-50/50 text-red-600',
    details: 'เน้นลดงานแมนนวล ข้อมูลเชื่อมโยงกัน ลดขั้นตอนส่งเอกสาร ลดจำนวนการพิมพ์กระดาษโดยไม่จำเป็น',
    examples: [
      {
        problem: 'การทำเอกสารเบิกค่าเดินทาง ค่าน้ำมัน ค่าเบี้ยเลี้ยงของทีมช่างติดตั้งนอกสถานที่ บัญชีต้องมานั่งแกะลายมือเขียนจากใบเสร็จที่จางๆ และคีย์ข้อมูลลงตาราง Excel ทุกเดือน',
        solution: 'ทำฟอร์มกรอกลิงก์ข้อมูลผ่าน Google Forms สำหรับให้ช่างแต่ละคนแนบภาพถ่ายใบเสร็จค่าน้ำมันและพิกัดเดินทางในแต่ละทริป',
        result: 'ฝ่ายบัญชีสามารถสรุปตัวเลข Excel ได้อัตโนมัติ ไม่ต้องถอดรหัสลายมือ ช่วยเซฟเวลกว่า 3 วันต่อเดือน'
      },
      {
        problem: 'เวลาพนักงานใหม่เข้ามา ต้องอธิบายกฎของบริษัท สวัสดิการ และสิทธิ์ต่างๆ ซ้ำๆ เดิมๆ ทุกครั้งใช้เวลาหลายชั่วโมง',
        solution: 'สร้างเอกสารสั้นฉบับรวมข้อมูลคำถามพบบ่อย (FAQs) พร้อมคลิปแนะนำตัวความยาว 10 นาที อัปโหลดลงในโฟลเดอร์ให้เปิดดูก่อนร่วมงานจริง',
        result: 'ลดระยะเวลาสอนเทรนนิ่งซ้ำของฝ่ายบุคคล และพนักงานได้รับข้อมูลที่แม่นยำชัดเจนเท่าเทียมกันทุกคน'
      }
    ]
  }
];

const TEMPLATE_PROBLEMS = [
  {
    id: 'p1',
    deptId: 'eng',
    title: 'บอร์ดเงาจัดระเบียบเครื่องมือช่าง',
    problem: 'หาเครื่องมือช่างไม่เจอในตู้รวมหน้างาน เสียเวลารื้อ',
    cause: 'พนักงานวางกองรวมกัน ไม่มีการแยกประเภทยหัสตำแหน่ง',
    solution: 'ทำแผ่นโฟมเจาะรูเฉพาะขนาดเครื่องมือ (Shadow Foam) วางตำแหน่งชัดเจน',
    benefit: 'ลดเวลาหาประแจไขตู้คอนโทรลจาก 5 นาที เหลือ 10 วินาที ชำรุดสูญหายรู้ทันที'
  },
  {
    id: 'p2',
    deptId: 'eng',
    title: 'ฟอร์มตรวจประวัติอินเวอร์เตอร์ออนไลน์',
    problem: 'จดบันทึกค่าการทำงานของตู้ควบคุมซ้ำลงบนกระดาษ แล้วต้องมาคีย์ลงคอมพิวเตอร์ทีหลัง',
    cause: 'ยังใช้ระบบฟอร์มกระดาษบันทึกผลตรวจสอบภาคสนาม',
    solution: 'ออกแบบแบบฟอร์มตรวจสอบออนไลน์ผ่านแท็บเล็ต/มือถือ บันทึกข้อมูลส่งตรงสู่ฐานข้อมูล',
    benefit: 'ลดการทำงานสองซ้ำ ลดความเสี่ยงในการสะกดตัวเลขผิดพลาด ดึงผลวิเคราะห์ได้ทันที'
  },
  {
    id: 'p3',
    deptId: 'sales',
    title: 'ศูนย์รวมลิงก์คู่มือสินค้าแชร์ผ่านคลาวด์',
    problem: 'หาแคตตาล็อกคู่มือรุ่นอินเวอร์เตอร์ส่งให้ลูกค้าผ่าน LINE นานมาก ค้นหาไม่เจอในมือถือ',
    cause: 'เก็บกระจัดกระจายตามแชตส่วนตัวของแต่ละคน',
    solution: 'สร้างอัลบั้มลิงก์ศูนย์รวมคู่มือ Google Drive แบ่งตามแบรนด์และรุ่นที่ใช้ประจำ',
    benefit: 'ส่งสเปกให้ลูกค้าเสร็จใน 30 วินาที เพิ่มโอกาสการปิดการขายได้ไวกว่าคู่แข่ง'
  },
  {
    id: 'p4',
    deptId: 'sales',
    title: 'แบบฟอร์มบันทึกการเปลี่ยนสเปกสินค้า',
    problem: 'ข้อมูลคำสั่งซื้อสเปกตู้เปลี่ยนกลางคันบ่อยประสานงานพลาด ช่างต่อแบบผิด',
    cause: 'แจ้งเปลี่ยนผ่านแชตไลน์กลุ่มสลับไปมา ข้อมูลตกหล่น',
    solution: 'กำหนดเอกสาร Change Order สั้นๆ แผ่นเดียว ส่งอนุมัติทางเมลระบุช่องชัดเจนเป็นมาตรฐานเดียว',
    benefit: 'ลดความผิดพลาดในการประกอบตู้ไปหน้างาน ได้งานที่ถูกต้อง 100% ตามสั่งของลูกค้า'
  },
  {
    id: 'p5',
    deptId: 'warehouse',
    title: 'ติดสติกเกอร์รหัสสีจำแนกประเภทวัสดุ',
    problem: 'หยิบเทปละลายพันสายไฟผิดขนาดเพราะสีกล่องกระดาษภายนอกเหมือนกันหมด',
    cause: 'ไม่มีป้ายระบุจำแนกขนาดและสีที่เด่นชัดเจนพอสังเกตได้จากระยะไกล',
    solution: 'ติดสติกเกอร์สีแบ่งรหัส (Color Coding) ตามหน้ากว้างขนาดเทปข้างตู้จัดระเบียบใหม่',
    benefit: 'ป้องกันปัญหาหยิบพัสดุผิดไปหน้างาน ไม่เสียเวลากลับมาเปลี่ยนที่โกดังใหม่'
  },
  {
    id: 'p6',
    deptId: 'office',
    title: 'ซองเก็บใบเสร็จชำระค่าน้ำมันประจำรถ',
    problem: 'ใบเสร็จรับเงินค่าจอดรถ/น้ำมันของช่างหลุดหาย ทำให้เบิกเงินรองจ่ายคืนช้า',
    cause: 'ใช้คลิปหนีบรวมกระดาษแผ่นเล็กแผ่นน้อยเข้าด้วยกัน ไม่มีที่เก็บจำแนกเฉพาะ',
    solution: 'จัดเตรียมซองพลาสติกติดซิปหนีบพกไปในรถคู่กับตารางจดบันทึกให้จัดเก็บหลังซื้อทันที',
    benefit: 'หมดปัญหาใบเสร็จปลิวชำรุดเสียหาย บัญชีตรวจยอดไว ช่างได้รับเงินรองจ่ายคืนรวดเร็วขึ้น'
  }
];

const SPECIFIC_DEPARTMENTS = [
  "Accounting& Finance Dep.",
  "Automation",
  "Business Development",
  "Design",
  "Engineering Dep.",
  "Human Resources Dep.",
  "Marketing",
  "Product",
  "Production",
  "Project",
  "Sales",
  "Service",
  "Solar pump",
  "Solar roof",
  "Support",
  "Technical",
  "Telesales",
  "คลังสินค้าและขนส่ง",
  "จัดซื้อ",
  "บริหาร"
];

const DEPT_MAPPING = {
  "Accounting& Finance Dep.": "office",
  "Automation": "eng",
  "Business Development": "sales",
  "Design": "eng",
  "Engineering Dep.": "eng",
  "Human Resources Dep.": "office",
  "Marketing": "sales",
  "Product": "eng",
  "Production": "eng",
  "Project": "eng",
  "Sales": "sales",
  "Service": "eng",
  "Solar pump": "eng",
  "Solar roof": "eng",
  "Support": "office",
  "Technical": "eng",
  "Telesales": "sales",
  "คลังสินค้าและขนส่ง": "warehouse",
  "จัดซื้อ": "warehouse",
  "บริหาร": "office"
};

const DEFAULT_MOCK_PROPOSALS = [
  {
    row: 1,
    timestamp: '22/6/2026, 10:00:00 AM',
    title: 'บอร์ดเงาจัดระเบียบเครื่องมือช่าง',
    creator: 'นายสมศักดิ์ แผนกติดตั้งโซลาร์',
    department: 'Engineering Dep.',
    problemBefore: 'ช่างเดินหาประแจ คีม บ่อยๆ เพราะวางสลับและปนกันในรถกระบะบริการหน้างาน ทำให้เสียเวลาประกอบตู้นานเกินไป',
    problemCause: 'ไม่มีถาดแบ่งช่องวางเครื่องมือเฉพาะตัว',
    solutionAfter: 'ทำระบบบอร์ดเก็บเครื่องมือแบบเงาและระบุสัญลักษณ์ (Shadow Board) บนกล่องเครื่องมือในรถช่าง',
    expectedBenefit: 'ประหยัดเวลาค้นหาเครื่องมือได้วันละ 30 นาที และหมดปัญหาลืมทิ้งเครื่องมือไว้หน้างาน',
    status: 'Approved',
    approver: 'แอดมินสมนึก',
    feedback: 'ดีมาก ช่วยลดเวลาหน้างานจริงและเครื่องมือไม่สูญหาย'
  },
  {
    row: 2,
    timestamp: '22/6/2026, 10:15:00 AM',
    title: 'ฟอร์มตรวจประวัติอินเวอร์เตอร์ออนไลน์',
    creator: 'นายธีรชัย ช่างบริการเทคนิค',
    department: 'Service',
    problemBefore: 'เวลาทดสอบบอร์ดชำรุดของลูกค้า ต้องจดข้อมูลสเปกลงสมุดบันทึกย้อนหลังทุกเครื่องเพื่อตรวจสอบประวัติ',
    problemCause: 'ยังใช้ระบบกระดาษและเอกสารแมนนวลในการบันทึกข้อมูลภาคสนาม',
    solutionAfter: 'สร้างแบบฟอร์มตรวจสอบสแกนรหัสผ่าน QR Code ยึดกับตัวเครื่องสแกนกรอกผ่านมือถือส่งตรงฐานข้อมูล',
    expectedBenefit: 'ตัดขั้นตอนการจดซ้ำซ้อน ลดเวลาลงทะเบียนจาก 15 นาที เหลือเพียง 2 นาทีต่อเครื่อง',
    status: 'Pending',
    approver: '',
    feedback: ''
  }
];

function BackendProposalCard({ proposal, onUpdateStatus }) {
  const [feedback, setFeedback] = useState(proposal.feedback || '');
  const [approver, setApprover] = useState(proposal.approver || '');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="border border-neutral-200 rounded-2xl p-5 space-y-4 hover:border-neutral-300 transition-colors bg-white relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-100 pb-3 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase font-bold bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded border border-neutral-200">
              แถวที่ {proposal.row}
            </span>
            <span className="text-[10px] text-neutral-400 font-bold">{proposal.timestamp}</span>
          </div>
          <h4 className="text-md font-bold text-neutral-900 mt-1">{proposal.title}</h4>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className={`px-2.5 py-1 rounded-full text-xs font-black w-fit border ${proposal.status === 'Approved'
            ? 'bg-green-50 border-green-200 text-green-700'
            : proposal.status === 'Rejected'
              ? 'bg-red-50 border-red-200 text-red-700'
              : 'bg-yellow-50 border-yellow-250 text-yellow-750'
            }`}>
            {proposal.status === 'Approved' ? 'อนุมัติแล้ว' : proposal.status === 'Rejected' ? 'ปฏิเสธ' : 'รอการประเมิน'}
          </span>
          {proposal.approver && (
            <span className="text-[10px] text-neutral-500 font-bold flex items-center gap-1">
              <User className="w-3 h-3 text-neutral-400" />
              ผู้ประเมิน: <span className="text-neutral-700 font-black">{proposal.approver}</span>
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-xs font-bold bg-neutral-50 p-2.5 rounded-xl border border-neutral-200">
        <div>
          <span className="block text-[9px] uppercase text-neutral-400">ผู้เสนอ:</span>
          <span className="text-neutral-800">{proposal.creator}</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase text-neutral-400">แผนก:</span>
          <span className="text-neutral-800">{proposal.department}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="bg-neutral-50 border border-neutral-200 p-3 rounded-xl">
          <span className="font-bold text-neutral-500 block mb-1">ปัญหาก่อนปรับปรุง (Before):</span>
          <p className="text-neutral-700 font-semibold leading-relaxed">{proposal.problemBefore}</p>
          <span className="font-bold text-neutral-500 block mt-2 mb-1">สาเหตุหลัก:</span>
          <p className="text-neutral-700 font-semibold leading-relaxed">{proposal.problemCause}</p>
        </div>
        <div className="bg-red-50/20 border border-red-100 p-3 rounded-xl">
          <span className="font-bold text-red-600 block mb-1">วิธีการปรับปรุงใหม่ (After):</span>
          <p className="text-neutral-700 font-semibold leading-relaxed">{proposal.solutionAfter}</p>
          <span className="font-bold text-neutral-500 block mt-2 mb-1">ผลดีที่ได้รับ:</span>
          <p className="text-neutral-700 font-semibold leading-relaxed">{proposal.expectedBenefit}</p>
        </div>
      </div>

      {/* Approver Input Field */}
      <div className="pt-2 border-t border-neutral-100 space-y-2">
        <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
          ชื่อผู้ประเมิน / ผู้อนุมัติ <span className="text-red-600 font-black">*</span>:
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
            <User className="w-3.5 h-3.5" />
          </span>
          <input
            type="text"
            value={approver}
            onChange={(e) => setApprover(e.target.value)}
            placeholder="กรอกชื่อผู้ประเมิน / ผู้อนุมัติ (จำเป็นต้องกรอกก่อนอนุมัติหรือปฏิเสธ)"
            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-9 pr-3 py-2 text-xs text-neutral-800 focus:outline-none focus:border-red-600 focus:bg-white transition-all font-semibold"
          />
        </div>
      </div>

      <div className="pt-2 border-t border-neutral-100 space-y-2">
        <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
          ความคิดเห็นของแอดมิน / ข้อเสนอแนะ:
        </label>
        {isEditing || !proposal.feedback ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="กรอกข้อความแนะนำสำหรับผู้ยื่นข้อเสนอ..."
              className="flex-grow bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2 text-xs text-neutral-800 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
            />
            {proposal.feedback && (
              <button
                onClick={() => setIsEditing(false)}
                className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-xs font-bold rounded-xl border border-neutral-200"
              >
                ยกเลิก
              </button>
            )}
          </div>
        ) : (
          <div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-700">
            <span>{proposal.feedback}</span>
            <button
              onClick={() => setIsEditing(true)}
              className="text-[10px] text-red-600 hover:text-red-700 font-bold"
            >
              แก้ไขคำแนะนำ
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2 pt-2 border-t border-neutral-100">
        <button
          onClick={() => {
            if (!approver.trim()) {
              alert('กรุณากรอกชื่อผู้ประเมิน / ผู้อนุมัติ ก่อนดำเนินการปฏิเสธครับ');
              return;
            }
            onUpdateStatus(proposal.row, 'Rejected', feedback, approver.trim());
          }}
          disabled={proposal.status === 'Rejected'}
          className={`px-4 py-2 border text-xs font-bold rounded-xl transition-all ${proposal.status === 'Rejected'
            ? 'bg-neutral-50 border-neutral-200 text-neutral-400 cursor-not-allowed'
            : 'border-red-600 text-red-600 hover:bg-red-50 active:scale-95'
            }`}
        >
          ปฏิเสธ (Reject)
        </button>
        <button
          onClick={() => {
            if (!approver.trim()) {
              alert('กรุณากรอกชื่อผู้ประเมิน / ผู้อนุมัติ ก่อนดำเนินการอนุมัติครับ');
              return;
            }
            onUpdateStatus(proposal.row, 'Approved', feedback, approver.trim());
          }}
          disabled={proposal.status === 'Approved'}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${proposal.status === 'Approved'
            ? 'bg-neutral-50 border-neutral-200 text-neutral-400 cursor-not-allowed'
            : 'bg-green-600 text-white hover:bg-green-500 shadow-sm active:scale-95'
            }`}
        >
          <Check className="w-3.5 h-3.5" />
          <span>อนุมัติ (Approve)</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('presentation'); // 'presentation', 'playbook', 'generator', 'backend'
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // States for interactive generator
  const [selectedDept, setSelectedDept] = useState('eng');
  const [selectedSpecificDept, setSelectedSpecificDept] = useState(SPECIFIC_DEPARTMENTS[0]);
  const [kaizenTitle, setKaizenTitle] = useState('');
  const [problemBefore, setProblemBefore] = useState('');
  const [problemCause, setProblemCause] = useState('');
  const [solutionAfter, setSolutionAfter] = useState('');
  const [expectedBenefit, setExpectedBenefit] = useState('');
  const [kaizenCreator, setKaizenCreator] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  // States for backend view and locking
  const [searchQuery, setSearchQuery] = useState('');
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [isBackendUnlocked, setIsBackendUnlocked] = useState(() => localStorage.getItem('is_backend_unlocked') === 'true');
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [backendFilter, setBackendFilter] = useState('All');
  const [isLoadingBackend, setIsLoadingBackend] = useState(false);
  const [backendProposals, setBackendProposals] = useState(() => {
    const saved = localStorage.getItem('local_proposals');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  // Function to apply templates
  const handleApplyTemplate = (tpl) => {
    setKaizenTitle(tpl.title || '');
    setProblemBefore(tpl.problem);
    setProblemCause(tpl.cause);
    setSolutionAfter(tpl.solution);
    setExpectedBenefit(tpl.benefit);
  };

  const handleClearForm = () => {
    setKaizenTitle('');
    setProblemBefore('');
    setProblemCause('');
    setSolutionAfter('');
    setExpectedBenefit('');
    setKaizenCreator('');
  };

  const handleCopyText = () => {
    const textToCopy = `
=== บัตรนำเสนอไอเดียปรับปรุงงาน (Kaizen Card) ===
ผู้เสนอไอเดีย: ${kaizenCreator || 'ระบุผู้เสนอ'}
ฝ่าย/แผนก: ${selectedSpecificDept}

[ปัญหาก่อนปรับปรุง (Before)]:
- ${problemBefore}
- สาเหตุ: ${problemCause}

[วิธีการปรับปรุงที่เสนอ (After)]:
- ${solutionAfter}

[ผลลัพธ์ที่คาดว่าจะได้รับ]:
- ${expectedBenefit}
==============================================
    `;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
  };

  const handleSubmitToGoogleSheet = async () => {
    if (!GOOGLE_SHEET_WEB_APP_URL || GOOGLE_SHEET_WEB_APP_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
      setSubmitStatus('error');
      setSubmitMessage('กรุณาตั้งค่า Google Apps Script Web App URL ในโค้ด (ที่ตัวแปร GOOGLE_SHEET_WEB_APP_URL ด้านบนสุด) ก่อนส่งข้อมูลครับ');
      return;
    }

    if (!GOOGLE_SHEET_WEB_APP_URL.startsWith('http://') && !GOOGLE_SHEET_WEB_APP_URL.startsWith('https://')) {
      setSubmitStatus('error');
      setSubmitMessage('คุณใส่ Google Sheet ID แทนที่จะเป็นลิงก์ Web App URL (กรุณาใช้ลิงก์เว็บแอปที่ขึ้นต้นด้วย https://script.google.com/ จากขั้นตอนการ Deploy Apps Script ครับ)');
      return;
    }

    setSubmitStatus('submitting');
    setSubmitMessage('');

    try {
      await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: kaizenTitle || 'ร่างไอเดียปรับปรุงงาน',
          creator: kaizenCreator || 'พนักงานหน้างาน',
          department: selectedSpecificDept,
          problemBefore,
          problemCause,
          solutionAfter,
          expectedBenefit,
        }),
      });

      setSubmitStatus('success');

      // Append locally to keep view reactive
      const newProposal = {
        row: backendProposals.length + 1,
        timestamp: new Date().toLocaleString(),
        title: kaizenTitle || 'ร่างไอเดียปรับปรุงงาน',
        creator: kaizenCreator || 'พนักงานหน้างาน',
        department: selectedSpecificDept,
        problemBefore,
        problemCause,
        solutionAfter,
        expectedBenefit,
        status: 'Pending',
        approver: '',
        feedback: ''
      };
      const updatedList = [newProposal, ...backendProposals];
      setBackendProposals(updatedList);
      localStorage.setItem('local_proposals', JSON.stringify(updatedList));

      // After 2 seconds, clear the form and redirect to homepage tab
      setTimeout(() => {
        handleClearForm();
        setSubmitStatus('idle');
        setActiveTab('presentation');
      }, 2000);

    } catch (error) {
      console.error('Error submitting to Google Sheet:', error);
      setSubmitStatus('error');
      setSubmitMessage('เกิดข้อผิดพลาดในการเชื่อมต่อกับ Google Sheets กรุณาตรวจสอบ URL หรือเครือข่าย');
    }
  };

  const handleUpdateStatus = async (rowIndex, newStatus, feedbackText, approverName) => {
    // 1. Update locally
    const updated = backendProposals.map(item => {
      if (item.row === rowIndex) {
        return { ...item, status: newStatus, feedback: feedbackText, approver: approverName };
      }
      return item;
    });
    setBackendProposals(updated);
    localStorage.setItem('local_proposals', JSON.stringify(updated));

    // 2. Try to update sheet via fetch if URL is configured
    if (GOOGLE_SHEET_WEB_APP_URL && GOOGLE_SHEET_WEB_APP_URL.startsWith('http')) {
      try {
        await fetch(GOOGLE_SHEET_WEB_APP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'updateStatus',
            row: rowIndex,
            status: newStatus,
            feedback: feedbackText,
            approver: approverName
          })
        });
      } catch (e) {
        console.error("Failed to update status on Google Sheet", e);
      }
    }
  };

  // Fetch live proposals when backend is unlocked or status tab is opened
  useEffect(() => {
    if (activeTab === 'backend' || activeTab === 'status') {
      const fetchLiveProposals = async () => {
        if (!GOOGLE_SHEET_WEB_APP_URL || !GOOGLE_SHEET_WEB_APP_URL.startsWith('http')) return;
        setIsLoadingBackend(true);
        try {
          const res = await fetch(GOOGLE_SHEET_WEB_APP_URL);
          const data = await res.json();
          if (Array.isArray(data)) {
            const mapped = data.map((item, idx) => ({
              row: item.row || idx + 1,
              timestamp: item.timestamp || new Date().toLocaleString(),
              title: item.title || 'ร่างไอเดียปรับปรุงงาน',
              creator: item.creator || 'พนักงาน',
              department: item.department || 'ทั่วไป',
              problemBefore: item.problemBefore || '',
              problemCause: item.problemCause || '',
              solutionAfter: item.solutionAfter || '',
              expectedBenefit: item.expectedBenefit || '',
              status: item.status || 'Pending',
              approver: item.approver || '',
              feedback: item.feedback || ''
            }));
            setBackendProposals(mapped);
            localStorage.setItem('local_proposals', JSON.stringify(mapped));
          }
        } catch (e) {
          console.error("Failed to fetch live proposals", e);
        } finally {
          setIsLoadingBackend(false);
        }
      };
      fetchLiveProposals();
    }
  }, [activeTab]);

  // Auto-lock when navigating away from the backend tab
  useEffect(() => {
    if (activeTab !== 'backend' && isBackendUnlocked) {
      setIsBackendUnlocked(false);
      localStorage.removeItem('is_backend_unlocked');
    }
  }, [activeTab, isBackendUnlocked]);

  const handleLogoClick = () => {
    if (isBackendUnlocked) {
      setActiveTab('backend');
    } else {
      setShowUnlockModal(true);
    }
  };

  const currentSlide = PRESENTATION_SLIDES[currentSlideIndex];

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 flex flex-col font-sans selection:bg-red-600/10 selection:text-red-700">

      {/* --- TOP BAR / RED WHITE GREY LOGO & HEADER --- */}
      <header className="bg-white border-b border-neutral-200 py-4 px-6 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={teraLogo}
              alt="TERA Logo"
              className="h-24 w-auto object-contain cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              onClick={handleLogoClick}
            />
            <div>
              <h1 className="text-lg font-extrabold text-neutral-900 tracking-wide">TERA GROUP CO., LTD.</h1>
              <p className="text-xs text-neutral-500 font-semibold">Continuous Improvement • ฝ่ายไคเซ็นเพื่อการพัฒนาอย่างยั่งยืน</p>
            </div>
          </div>

          {/* TAB NAVIGATION IN RED/WHITE/GREY LIGHT THEME */}
          <nav className="flex gap-1.5 bg-neutral-100 p-1.5 rounded-xl border border-neutral-200">
            <button
              onClick={() => setActiveTab('presentation')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${activeTab === 'presentation'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>สไลด์ทำความเข้าใจ</span>
            </button>
            <button
              onClick={() => setActiveTab('playbook')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${activeTab === 'playbook'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                }`}
            >
              <Users className="w-4 h-4" />
              <span>แนวทางแต่ละแผนก</span>
            </button>
            <button
              onClick={() => setActiveTab('generator')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${activeTab === 'generator'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                }`}
            >
              <FileText className="w-4 h-4" />
              <span>เครื่องมือร่างไอเดีย</span>
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${activeTab === 'status'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                }`}
            >
              <Search className="w-4 h-4" />
              <span>ตรวจสอบสถานะ</span>
            </button>
          </nav>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 md:p-6 flex flex-col justify-center">

        {/* ========================================================
            TAB 1: PRESENTATION SLIDES (LIGHT GREY & RED SPECIAL)
            ======================================================== */}
        {activeTab === 'presentation' && (
          <div className="flex flex-col gap-6 items-center">

            {/* Slide Body */}
            <div className="w-full max-w-4xl bg-white rounded-3xl border border-neutral-200 shadow-xl p-6 md:p-10 min-h-[480px] flex flex-col justify-between relative overflow-hidden transition-all duration-500">

              {/* Decorative light red visual detail */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

              {/* Progress bar */}
              <div className="absolute top-0 left-0 w-full bg-neutral-200 h-1.5">
                <div
                  className="bg-red-600 h-full transition-all duration-500"
                  style={{ width: `${((currentSlideIndex + 1) / PRESENTATION_SLIDES.length) * 100}%` }}
                />
              </div>

              {/* Slide Header */}
              <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-5">
                <div className="flex items-center gap-4">
                  {currentSlide.icon}
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-neutral-900 tracking-tight">{currentSlide.title}</h2>
                    <p className="text-xs md:text-sm text-neutral-500 font-bold">{currentSlide.subtitle}</p>
                  </div>
                </div>
                <div className="bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200 font-mono text-xs text-red-600 font-bold">
                  {currentSlideIndex + 1} / {PRESENTATION_SLIDES.length}
                </div>
              </div>

              {/* Slide Main Content */}
              <div className="my-6 md:my-8 flex-grow">
                {currentSlide.content}
              </div>

              {/* Slide Controls Footer */}
              <div className="flex items-center justify-between border-t border-neutral-200 pt-5">
                <button
                  onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentSlideIndex === 0}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${currentSlideIndex === 0
                    ? 'text-neutral-400 bg-neutral-100 cursor-not-allowed'
                    : 'text-neutral-700 bg-neutral-200 hover:bg-neutral-300 active:scale-95'
                    }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>ย้อนกลับ</span>
                </button>

                <div className="hidden sm:flex gap-1.5">
                  {PRESENTATION_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlideIndex === idx ? 'bg-red-600 w-8' : 'bg-neutral-300 hover:bg-neutral-400'
                        }`}
                    />
                  ))}
                </div>

                {currentSlideIndex < PRESENTATION_SLIDES.length - 1 ? (
                  <button
                    onClick={() => setCurrentSlideIndex(prev => Math.min(PRESENTATION_SLIDES.length - 1, prev + 1))}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-red-600 text-white hover:bg-red-500 active:scale-95 transition-all shadow-md shadow-red-600/10"
                  >
                    <span>ถัดไป</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveTab('playbook')}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition-all shadow-md"
                  >
                    <span>ดูแนวทางแต่ละแผนก</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

          </div>
        )}

        {/* ========================================================
            TAB 2: PLAYBOOK BY DEPARTMENT (LIGHT THEME SHADES)
            ======================================================== */}
        {activeTab === 'playbook' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full border border-red-200 uppercase tracking-widest">
                Tera Kaizen Playbook
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900">แนวทางไอเดียแยกตามแผนก</h2>
              <p className="text-neutral-500 text-sm font-medium">
                เพราะธรรมชาติงานในองค์กรของเรามีความหลากหลาย เราจึงคัดย่อตัวอย่างปัญหาหน้างานไฟฟ้า-วิศวกรรมที่เกิดขึ้นได้จริงมาเป็นตัวอย่างนำทางครับ
              </p>
            </div>

            {/* Grid of department playbooks in clean light styles */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
              {DEPARTMENTS.map((dept) => (
                <div key={dept.id} className="bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col justify-between shadow-md relative overflow-hidden group hover:border-red-600 transition-all duration-300">

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${dept.color.split(' ')[0]} ${dept.color.split(' ')[1]}`}>
                        {dept.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 text-base md:text-lg">{dept.name}</h3>
                        <p className="text-xs text-neutral-500 font-semibold mt-0.5">{dept.details}</p>
                      </div>
                    </div>

                    <div className="border-t border-neutral-150 pt-3 space-y-4">
                      {dept.examples.map((ex, idx) => (
                        <div key={idx} className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 space-y-3">

                          <div className="flex items-center gap-2 text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded w-fit border border-red-100">
                            <span>ตัวอย่างเคสที่ {idx + 1}</span>
                          </div>

                          {/* Before Case */}
                          <div className="space-y-1">
                            <span className="text-xs font-bold text-neutral-500 flex items-center gap-1">
                              <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" /> ปัญหาก่อนปรับปรุง (Before):
                            </span>
                            <p className="text-xs text-neutral-700 leading-relaxed pl-4 border-l-2 border-neutral-300">
                              {ex.problem}
                            </p>
                          </div>

                          {/* After Case */}
                          <div className="space-y-1">
                            <span className="text-xs font-bold text-red-600 flex items-center gap-1">
                              <Zap className="w-3.5 h-3.5 shrink-0" /> ไอเดียไคเซ็นที่เสนอ (After):
                            </span>
                            <p className="text-xs text-neutral-900 font-extrabold leading-relaxed pl-4 border-l-2 border-red-600">
                              {ex.solution}
                            </p>
                          </div>

                          {/* Result */}
                          <div className="space-y-1">
                            <span className="text-xs font-bold text-neutral-500 flex items-center gap-1">
                              <Award className="w-3.5 h-3.5 text-yellow-600 shrink-0" /> ผลลัพธ์:
                            </span>
                            <p className="text-xs text-neutral-500 italic pl-4 border-l-2 border-neutral-300">
                              {ex.result}
                            </p>
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedDept(dept.id);
                        setActiveTab('generator');
                        const tpl = TEMPLATE_PROBLEMS.find(p => p.deptId === dept.id);
                        if (tpl) handleApplyTemplate(tpl);
                      }}
                      className="flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                    >
                      <span>ลองร่างแผนของแผนกนี้</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            <div className="bg-white border border-neutral-200 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-sm">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm md:text-base">มองเห็นจุดที่ปรับเปลี่ยนหน้างานคุณได้แล้วใช่ไหมครับ?</h4>
                  <p className="text-xs text-neutral-500 font-semibold">ลองหยิบตัวแก้ไขจำลองเพื่อร่างแบบรายงานส่งประเมินรับคะแนนกันต่อเลยครับ</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('generator')}
                className="w-full md:w-auto bg-red-600 text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-red-500 transition-all active:scale-95 shadow-md flex items-center justify-center gap-2"
              >
                <span>เปิดเครื่องมือร่างไอเดีย</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: KAIZEN CARD GENERATOR & DRAFT HELPER (LIGHT MODE)
            ======================================================== */}
        {activeTab === 'generator' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="bg-neutral-200 text-neutral-700 text-xs font-bold px-3 py-1 rounded-full border border-neutral-300 uppercase tracking-widest">
                Interactive Tool
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900">เครื่องมือร่างใบข้อเสนอไคเซ็น</h2>
              <p className="text-neutral-500 text-sm font-semibold">
                ช่วยให้พนักงานทดลองเขียนเปรียบเทียบก่อน-หลังหน้างาน และคำนวณประโยชน์ได้ทันทีอย่างรวดเร็ว
              </p>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

              {/* Form Input (7 Columns) */}
              <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-5 md:p-6 space-y-6 shadow-md">

                {/* 1. Select Department */}
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    1. เลือกแผนกที่พนักงานทำงานอยู่
                  </label>
                  <div className="relative">
                    <select
                      value={selectedSpecificDept}
                      onChange={(e) => {
                        const newDept = e.target.value;
                        setSelectedSpecificDept(newDept);
                        const groupDept = DEPT_MAPPING[newDept];
                        if (groupDept) {
                          setSelectedDept(groupDept);
                        }
                      }}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:border-red-600 focus:bg-white transition-colors font-bold appearance-none cursor-pointer"
                    >
                      {SPECIFIC_DEPARTMENTS.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                      <ChevronRight className="w-4 h-4 rotate-90 transform" />
                    </div>
                  </div>
                </div>

                {/* 2. Choose Quick Template */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-bold text-neutral-700 flex items-center gap-1.5">
                      <span>2. เลือกปัญหาตัวอย่างด่วนประจำแผนก</span>
                      <HelpCircle className="w-4 h-4 text-neutral-400" />
                    </label>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {TEMPLATE_PROBLEMS.filter(tpl => tpl.deptId === selectedDept).map((tpl) => (
                      <button
                        key={tpl.id}
                        type="button"
                        onClick={() => handleApplyTemplate(tpl)}
                        className="bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 max-w-full font-semibold"
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span className="truncate">{tpl.problem}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Detailed Input Forms */}
                <div className="space-y-4 border-t border-neutral-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-600 text-white font-bold px-2.5 py-0.5 text-xs rounded">
                      ส่วนกรอกข้อมูล
                    </span>
                    <span className="text-xs text-neutral-500 font-semibold">แก้ไขหรือลองคีย์เคสใหม่ของคุณเองได้ที่นี่</span>
                  </div>

                  {/* Creator name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                        ชื่อผู้เขียนไอเดีย / ตำแหน่ง
                      </label>
                      <input
                        type="text"
                        value={kaizenCreator}
                        onChange={(e) => setKaizenCreator(e.target.value)}
                        placeholder="เช่น สมศักดิ์ แผนกติดตั้งโซลาร์ (หรือปล่อยว่าง)"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-red-500" /> หัวข้อการปรับปรุง / ชื่อเรื่อง
                      </label>
                      <input
                        type="text"
                        value={kaizenTitle}
                        onChange={(e) => setKaizenTitle(e.target.value)}
                        placeholder="เช่น บอร์ดเงาจัดระเบียบเครื่องมือช่าง"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors font-semibold"
                      />
                    </div>
                  </div>

                  {/* Problem Before */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1"><XCircle className="w-3.5 h-3.5 text-red-500" /> ปัญหาก่อนปรับปรุง (Before)</span>
                      <span className="text-[10px] text-red-600 font-bold">ปัญหาและจุดยุ่งยากปัจจุบัน</span>
                    </label>
                    <textarea
                      rows={2}
                      value={problemBefore}
                      onChange={(e) => setProblemBefore(e.target.value)}
                      placeholder="อธิบายปัญหาที่สร้างความยุ่งยาก ล่าช้า หรือไม่ปลอดภัยหน้างาน..."
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Problem Cause */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Search className="w-3.5 h-3.5 text-neutral-500" /> สาเหตุหลักของปัญหาคืออะไร?
                    </label>
                    <input
                      type="text"
                      value={problemCause}
                      onChange={(e) => setProblemCause(e.target.value)}
                      placeholder="เช่น ไม่มีจุดวางเฉพาะหน้างาน คัดแยกด้วยกล่องไม่ชัดเจน"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Solution After */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-red-500" /> วิธีการปรับปรุงงานใหม่ที่เสนอ (After)</span>
                      <span className="text-[10px] text-neutral-500 font-bold">ใช้วิธีอะไรเข้ามาแก้</span>
                    </label>
                    <textarea
                      rows={2}
                      value={solutionAfter}
                      onChange={(e) => setSolutionAfter(e.target.value)}
                      placeholder="เขียนอธิบายสิ่งที่จะลงมือทำ เช่น ใช้แบบฟอร์มสแกนผ่านไลน์ ติดป้ายรหัสสี..."
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Expected Benefit */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-yellow-600" /> ผลดีที่พนักงานและบริษัทจะได้รับร่วมกัน
                    </label>
                    <input
                      type="text"
                      value={expectedBenefit}
                      onChange={(e) => setExpectedBenefit(e.target.value)}
                      placeholder="เช่น ประหยัดกระดาษ 100%, ลดเวลารื้อหาประแจได้ 20 นาทีต่อตู้"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex items-center justify-between gap-4 border-t border-neutral-100 pt-4">
                  <button
                    type="button"
                    onClick={handleClearForm}
                    className="text-xs text-neutral-400 hover:text-neutral-600 font-bold transition-colors"
                  >
                    ล้างข้อความทั้งหมด
                  </button>
                  <p className="text-[10px] text-neutral-400 text-right italic font-medium">
                    *ข้อมูลอัปเดตแบบ Realtime ไปยังการ์ดพรีวิวด้านขวา
                  </p>
                </div>

              </div>

              {/* Kaizen Card Preview (5 Columns) - Styled Beautifully in Red, White, and Grey */}
              <div className="lg:col-span-5 space-y-4">

                <h4 className="text-sm font-bold text-neutral-600">
                  ตัวอย่างการ์ดข้อเสนอ (Kaizen Card Preview):
                </h4>

                {/* Simulated Kaizen card */}
                <div className="bg-white text-neutral-900 rounded-3xl p-6 shadow-xl border-4 border-red-600 relative overflow-hidden flex flex-col justify-between min-h-[480px]">

                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between border-b-2 border-neutral-100 pb-3">
                      <div>
                        <span className="text-[10px] font-black tracking-wider text-red-600 uppercase">
                          Tera Group Kaizen Activity
                        </span>
                        <h3 className="text-xl font-black text-neutral-950 tracking-tight">
                          {kaizenTitle || 'บัตรนำเสนอไอเดียปรับปรุงงาน'}
                        </h3>
                      </div>

                    </div>

                    {/* Department Tag & Submitter */}
                    <div className="grid grid-cols-2 gap-4 my-4 bg-neutral-50 p-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-800">
                      <div>
                        <span className="block text-[9px] uppercase font-bold text-neutral-400">แผนกงาน:</span>
                        <span className="font-extrabold text-neutral-900">
                          {selectedSpecificDept}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase font-bold text-neutral-400">ผู้จัดเสนอไอเดีย:</span>
                        <span className="font-extrabold text-neutral-900 truncate block">
                          {kaizenCreator || 'พนักงานหน้างาน'}
                        </span>
                      </div>
                    </div>

                    {/* Before/After Columns */}
                    <div className="space-y-4 my-4">

                      {/* Before Case - Styled in Grey/Red alert state */}
                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                        <span className="inline-block bg-neutral-200 text-neutral-800 text-[10px] font-black px-2 py-0.5 rounded-full mb-1">
                          ก่อนปรับปรุง (Before)
                        </span>
                        <p className="text-xs font-semibold text-neutral-700 leading-relaxed">
                          {problemBefore || 'ยังไม่ระบุปัญหา... (ลองคลิกปุ่มปัญหาด่วนทางซ้าย หรือเริ่มพิมพ์เพื่อทดสอบได้เลยครับ)'}
                        </p>
                        {problemCause && (
                          <p className="text-[10px] text-red-600 font-bold mt-1">
                            <strong>สาเหตุ:</strong> {problemCause}
                          </p>
                        )}
                      </div>

                      {/* Indicator arrow */}
                      <div className="flex justify-center my-1 text-red-600">
                        <ArrowRight className="w-5 h-5 rotate-90 transform" />
                      </div>

                      {/* After Case - Styled in Red accented highlight */}
                      <div className="bg-red-50 p-3 rounded-xl border border-red-100">
                        <span className="inline-block bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full mb-1">
                          หลังปรับปรุงที่เสนอ (After)
                        </span>
                        <p className="text-xs font-black text-red-950 leading-relaxed">
                          {solutionAfter || 'ยังไม่ระบุไอเดียการแก้ไขงาน...'}
                        </p>
                      </div>

                      {/* Benefit Case */}
                      {expectedBenefit && (
                        <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                          <span className="inline-block bg-neutral-800 text-white text-[10px] font-black px-2 py-0.5 rounded-full mb-1">
                            ผลงานที่ได้ (Benefits)
                          </span>
                          <p className="text-xs font-extrabold text-neutral-900 leading-relaxed flex items-center gap-1">
                            <Check className="w-4 h-4 text-green-600 shrink-0" /> {expectedBenefit}
                          </p>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="border-t border-neutral-100 pt-3 mt-4 flex justify-between items-center text-[10px] text-neutral-400 font-bold">
                    <span>Tera Kaizen Committee</span>
                    <span className="bg-red-600 text-white font-extrabold px-2 py-0.5 rounded">
                      รออนุมัติประเมินผล
                    </span>
                  </div>

                </div>

                {/* Submit to Google Sheet Action (Single Save Button) */}
                <button
                  type="button"
                  onClick={handleSubmitToGoogleSheet}
                  disabled={!problemBefore || !solutionAfter || submitStatus === 'submitting'}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${problemBefore && solutionAfter && submitStatus !== 'submitting'
                    ? 'bg-red-600 hover:bg-red-500 text-white cursor-pointer shadow-md active:scale-95'
                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                    }`}
                >
                  {submitStatus === 'submitting' ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>กำลังส่งข้อมูลไปที่ Google Sheet...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white animate-bounce" />
                      <span>บันทึกข้อมูลเข้า Google Sheet สำเร็จ!</span>
                    </>
                  ) : (
                    <>
                      <FileCheck className="w-4 h-4 text-white" />
                      <span>บันทึกข้อมูลเข้า Google Sheet</span>
                    </>
                  )}
                </button>

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-bold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{submitMessage}</span>
                  </div>
                )}


              </div>

            </div>
          </div>
        )}

        {/* ========================================================
            TAB 5: CHECK STATUS (ตรวจสอบสถานะ)
            ======================================================== */}
        {activeTab === 'status' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full border border-red-200 uppercase tracking-widest">
                Track Progress
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900">ตรวจสอบสถานะข้อเสนอ Kaizen</h2>
              <p className="text-neutral-500 text-sm font-medium">
                ติดตามผลการประเมินและข้อเสนอแนะจากคณะกรรมการแผนกไคเซ็นได้แบบเรียลไทม์
              </p>
            </div>

            {/* Search Input Card */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-5 shadow-md max-w-2xl mx-auto">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <Search className="w-5 h-5" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ค้นหาด้วยชื่อผู้เสนอ, หัวข้อเรื่อง หรือแผนก..."
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all font-semibold shadow-sm"
                />
              </div>
            </div>

            {/* Status Results */}
            <div className="max-w-4xl mx-auto space-y-4">
              {isLoadingBackend ? (
                <div className="text-center py-12 space-y-3">
                  <RefreshCw className="w-8 h-8 animate-spin text-red-600 mx-auto" />
                  <p className="text-xs text-neutral-500 font-semibold">กำลังโหลดข้อมูลสถานะล่าสุด...</p>
                </div>
              ) : backendProposals.filter(p => {
                const q = searchQuery.toLowerCase().trim();
                if (!q) return true;
                return (
                  (p.creator && p.creator.toLowerCase().includes(q)) ||
                  (p.title && p.title.toLowerCase().includes(q)) ||
                  (p.department && p.department.toLowerCase().includes(q))
                );
              }).length === 0 ? (
                <div className="text-center py-12 border border-dashed border-neutral-200 rounded-3xl bg-white space-y-2">
                  <AlertTriangle className="w-8 h-8 text-neutral-400 mx-auto" />
                  <p className="text-sm text-neutral-500 font-bold">ไม่พบข้อเสนอที่ตรงกับเงื่อนไขการค้นหา</p>
                  <p className="text-xs text-neutral-400">ลองตรวจสอบตัวสะกด หรือพิมพ์ค้นหาด้วยคำสั้นๆ</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {backendProposals
                    .filter(p => {
                      const q = searchQuery.toLowerCase().trim();
                      if (!q) return true;
                      return (
                        (p.creator && p.creator.toLowerCase().includes(q)) ||
                        (p.title && p.title.toLowerCase().includes(q)) ||
                        (p.department && p.department.toLowerCase().includes(q))
                      );
                    })
                    .map((proposal) => {
                      const isApproved = proposal.status === 'Approved';
                      const isRejected = proposal.status === 'Rejected';

                      return (
                        <div
                          key={proposal.row}
                          className={`bg-white border rounded-3xl p-5 shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden ${isApproved
                            ? 'border-green-200'
                            : isRejected
                              ? 'border-red-200'
                              : 'border-neutral-200'
                            }`}
                        >
                          {/* Decorative Top Accent Bar */}
                          <div className={`absolute top-0 left-0 right-0 h-1.5 ${isApproved
                            ? 'bg-green-500'
                            : isRejected
                              ? 'bg-red-500'
                              : 'bg-yellow-500'
                            }`} />

                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="space-y-2 flex-grow">
                              {/* Metadata */}
                              <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                                <span className="text-[9px] uppercase font-bold bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded border border-neutral-200">
                                  แถวที่ {proposal.row}
                                </span>
                                <span className="text-neutral-400">{proposal.timestamp}</span>
                              </div>

                              {/* Title */}
                              <h3 className="text-lg font-black text-neutral-900 tracking-tight">
                                {proposal.title}
                              </h3>

                              {/* Submitter Info */}
                              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 font-bold">
                                <span className="flex items-center gap-1">
                                  <User className="w-3.5 h-3.5 text-neutral-400" />
                                  ผู้เสนอ: <strong className="text-neutral-700">{proposal.creator}</strong>
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Layers className="w-3.5 h-3.5 text-neutral-400" />
                                  แผนก: <strong className="text-neutral-700">{proposal.department}</strong>
                                </span>
                              </div>
                            </div>

                            {/* Status Badge */}
                            <div className="shrink-0">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black border uppercase tracking-wider ${isApproved
                                ? 'bg-green-50 border-green-200 text-green-700'
                                : isRejected
                                  ? 'bg-red-50 border-red-200 text-red-700'
                                  : 'bg-yellow-50 border-yellow-250 text-yellow-750'
                                }`}>
                                {isApproved ? (
                                  <>
                                    <Check className="w-3.5 h-3.5" />
                                    <span>อนุมัติแล้ว</span>
                                  </>
                                ) : isRejected ? (
                                  <>
                                    <XCircle className="w-3.5 h-3.5" />
                                    <span>ไม่ผ่านการอนุมัติ</span>
                                  </>
                                ) : (
                                  <>
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>รอการประเมิน</span>
                                  </>
                                )}
                              </span>
                            </div>
                          </div>

                          {/* Summary of changes */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-4 border-t border-neutral-100 text-xs">
                            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                              <span className="font-bold text-neutral-500 block mb-1">ก่อนปรับปรุง (Before):</span>
                              <p className="text-neutral-700 font-semibold leading-relaxed">{proposal.problemBefore}</p>
                            </div>
                            <div className="bg-red-50/10 p-3 rounded-xl border border-red-50">
                              <span className="font-bold text-red-600 block mb-1">วิธีการปรับปรุงใหม่ (After):</span>
                              <p className="text-neutral-700 font-semibold leading-relaxed">{proposal.solutionAfter}</p>
                            </div>
                          </div>

                          {/* Feedback / Evaluation details */}
                          {proposal.feedback && (
                            <div className={`mt-4 p-4 rounded-2xl border text-xs space-y-2 ${isApproved
                              ? 'bg-green-50/30 border-green-100'
                              : 'bg-red-50/30 border-red-100'
                              }`}>
                              <div className="space-y-1">
                                <span className="block font-bold text-neutral-500 uppercase tracking-wider text-[10px]">
                                  ความคิดเห็นจากคณะกรรมการ:
                                </span>
                                <p className="text-neutral-750 font-medium italic pl-3 border-l-2 border-neutral-300">
                                  "{proposal.feedback}"
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 4: BACKEND ADMIN PANEL (RED, WHITE, AND GREY BRANDED)
            ======================================================== */}
        {activeTab === 'backend' && (
          <div className="space-y-6">

            {/* Header section with Stats */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-2xl flex items-center justify-center font-bold">
                  <Unlock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-neutral-950">แผงควบคุมระบบหลังบ้านแอดมิน</h2>
                  <p className="text-xs text-neutral-500 font-semibold flex items-center gap-1.5 mt-0.5">
                    <Shield className="w-3.5 h-3.5 text-red-600" />
                    <span>จัดการ ประเมินผล และอนุมัติข้อเสนอปรับปรุงงาน (Kaizen)</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    localStorage.removeItem('is_backend_unlocked');
                    setIsBackendUnlocked(false);
                    setActiveTab('presentation');
                  }}
                  className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-bold rounded-xl border border-neutral-200 flex items-center gap-1.5 transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>ล็อคระบบ / ออก</span>
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                <span className="text-[10px] uppercase font-bold text-neutral-450">ข้อเสนอทั้งหมด</span>
                <span className="text-2xl font-black text-neutral-900 mt-1">{backendProposals.length}</span>
              </div>
              <div className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                <span className="text-[10px] uppercase font-bold text-neutral-450">รอประเมินผล</span>
                <span className="text-2xl font-black text-yellow-600 mt-1">
                  {backendProposals.filter(p => p.status === 'Pending').length}
                </span>
              </div>
              <div className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                <span className="text-[10px] uppercase font-bold text-neutral-450">อนุมัติแล้ว</span>
                <span className="text-2xl font-black text-green-600 mt-1">
                  {backendProposals.filter(p => p.status === 'Approved').length}
                </span>
              </div>
              <div className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                <span className="text-[10px] uppercase font-bold text-neutral-450">ไม่อนุมัติ</span>
                <span className="text-2xl font-black text-red-600 mt-1">
                  {backendProposals.filter(p => p.status === 'Rejected').length}
                </span>
              </div>
            </div>

            {/* Filters and List */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-5 shadow-md space-y-4">

              <div className="flex flex-col sm:flex-row items-center justify-between border-b border-neutral-100 pb-3 gap-3">
                <h3 className="text-sm font-bold text-neutral-800 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-neutral-500" />
                  <span>รายการใบเสนอแนะ</span>
                </h3>

                {/* Filter buttons */}
                <div className="flex gap-1 bg-neutral-100 p-1 rounded-lg border border-neutral-200">
                  {['All', 'Pending', 'Approved', 'Rejected'].map(statusFilter => (
                    <button
                      key={statusFilter}
                      onClick={() => setBackendFilter(statusFilter)}
                      className={`px-3 py-1 text-xs font-bold rounded transition-colors ${backendFilter === statusFilter
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-900'
                        }`}
                    >
                      {statusFilter === 'All' ? 'ทั้งหมด' : statusFilter === 'Pending' ? 'รอประเมิน' : statusFilter === 'Approved' ? 'อนุมัติแล้ว' : 'ไม่อนุมัติ'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Proposals List */}
              {isLoadingBackend ? (
                <div className="text-center py-12 space-y-3">
                  <RefreshCw className="w-8 h-8 animate-spin text-red-600 mx-auto" />
                  <p className="text-xs text-neutral-500 font-semibold">กำลังโหลดข้อมูลจาก Google Sheets...</p>
                </div>
              ) : backendProposals.filter(p => backendFilter === 'All' || p.status === backendFilter).length === 0 ? (
                <div className="text-center py-12 border border-dashed border-neutral-200 rounded-2xl">
                  <p className="text-xs text-neutral-400 font-bold">ไม่มีรายการที่ตรงกับตัวกรองในขณะนี้</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {backendProposals
                    .filter(p => backendFilter === 'All' || p.status === backendFilter)
                    .map((proposal) => (
                      <BackendProposalCard
                        key={proposal.row}
                        proposal={proposal}
                        onUpdateStatus={handleUpdateStatus}
                      />
                    ))}
                </div>
              )}

            </div>

          </div>
        )}

      </main>

      {/* --- SITE FOOTER --- */}
      <footer className="bg-white border-t border-neutral-200 py-6 px-6 text-center text-xs text-neutral-500 mt-10">
        <div className="max-w-7xl mx-auto space-y-2">
          <p className="font-medium text-neutral-600">
            พัฒนาขึ้นเพื่อส่งเสริมกระบวนการคิดวิเคราะห์แก้ไขปัญหาอย่างยั่งยืนของ บริษัท เทอรา กรุ้ป จำกัด
          </p>
          <p className="text-red-600 font-black uppercase tracking-widest">
            "Tera Kaizen: Eliminate • Reduce • Change"
          </p>
        </div>
      </footer>

      {/* Unlock Passcode Modal */}
      {showUnlockModal && (
        <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-2xl max-w-sm w-full space-y-4 animate-in fade-in-50 zoom-in-95 duration-200 relative">

            <button
              onClick={() => {
                setShowUnlockModal(false);
                setPasscode('');
                setPasscodeError('');
              }}
              className="absolute top-4 right-4 p-1 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shadow-sm">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-neutral-950">แผงควบคุมระบบหลังบ้านแอดมิน</h3>
              <p className="text-xs text-neutral-500 font-semibold">
                กรุณากรอกรหัสผ่านเพื่อสิทธิ์ในการประเมินและอนุมัติใบงานไคเซ็น
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (passcode === 'Business') {
                  setIsBackendUnlocked(true);
                  localStorage.setItem('is_backend_unlocked', 'true');
                  setShowUnlockModal(false);
                  setActiveTab('backend');
                  setPasscode('');
                  setPasscodeError('');
                } else {
                  setPasscodeError('รหัสผ่านไม่ถูกต้อง กรุณากรอกรหัสใหม่อีกครั้งครับ');
                }
              }}
              className="space-y-3"
            >
              <div className="space-y-1">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="ใส่รหัสผ่านที่นี่"
                  className="w-full bg-neutral-50 border border-neutral-250 rounded-xl px-4 py-2.5 text-sm text-center text-neutral-800 focus:outline-none focus:border-red-600 focus:bg-white transition-colors font-bold"
                  autoFocus
                />
                {passcodeError && (
                  <p className="text-[10px] text-red-600 font-extrabold text-center">
                    {passcodeError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs py-2.5 rounded-xl transition-all active:scale-95 shadow-md flex items-center justify-center gap-1.5"
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>ยืนยันเข้าสู่ระบบ</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}