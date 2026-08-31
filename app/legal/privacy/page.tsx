import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '개인정보 처리방침 — 주크(JooK)의 놀이터',
  description: '주크(JooK)의 놀이터 및 연계 학습 서비스의 개인정보 처리방침입니다.',
}

const EFFECTIVE_DATE = '2026년 8월 31일'
const CONTACT_EMAIL = 'wnrkd1@g.cnees.kr'

function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold text-pikachu mb-3">{title}</h2>
      <div className="space-y-2 text-gray-300 leading-relaxed">{children}</div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="min-h-screen" style={{ background: '#0a0a14' }}>
        <div className="max-w-3xl mx-auto px-5 pt-14 pb-20">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-pikachu transition-colors mb-8"
          >
            ← 홈으로
          </a>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">개인정보 처리방침</h1>
          <p className="text-sm text-gray-500 mb-12">시행일: {EFFECTIVE_DATE}</p>

          <p className="text-gray-300 leading-relaxed mb-10">
            주크(JooK)의 놀이터(jook.cnpc.kr, 이하 &quot;본 서비스&quot;)는 수업을 위한 자료 제공 및
            학습공간으로 운영되며, 본 서비스와 연계되어 학생이 회원가입 후 이용하는 학습 도구(생활기록부
            분석, 기계학습 실습 등)를 포함합니다. 본 서비스는 「개인정보 보호법」 등 관련 법령을 준수하며,
            다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>

          <Article title="제1조 (수집하는 개인정보 항목 및 수집 방법)">
            <p>수집 항목: 학번, 이름, 이메일 주소</p>
            <p>수집 시점: 연계된 학습 서비스에 학생이 최초 회원가입할 때 1회</p>
            <p>수집 방법: 회원가입 화면을 통한 이용자 직접 입력</p>
          </Article>

          <Article title="제2조 (개인정보의 처리 목적)">
            <p>수집한 개인정보는 다음의 목적을 위해서만 처리합니다.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>수업 참여 학생 본인 확인</li>
              <li>수업 자료·학습 콘텐츠 제공 및 학습 이력 관리</li>
              <li>수업 운영에 필요한 공지사항 전달</li>
            </ul>
            <p>위 목적 외의 용도로는 이용하지 않습니다.</p>
          </Article>

          <Article title="제3조 (개인정보의 보유 및 이용 기간)">
            <p>
              학생 또는 법정대리인이 회원 탈퇴나 개인정보 삭제를 요청하는 경우 지체 없이 해당 정보를
              파기합니다.
            </p>
            <p>
              별도의 삭제 요청이 없는 경우에도, 수집 목적이 된 학년도 또는 학기가 종료되면 보유 기간이
              끝난 것으로 보고 지체 없이 파기합니다. 다만 관계 법령에 따라 보존할 의무가 있는 경우에는
              해당 기간 동안 별도로 보관할 수 있습니다.
            </p>
          </Article>

          <Article title="제4조 (개인정보의 제3자 제공)">
            <p>
              본 서비스는 이용자의 개인정보를 제1조에서 고지한 범위를 넘어 이용하거나 원칙적으로 외부에
              제공하지 않습니다. 다만 법령에 특별한 규정이 있거나 학생 본인(또는 법정대리인)의 동의가
              있는 경우는 예외로 합니다.
            </p>
          </Article>

          <Article title="제5조 (개인정보 처리의 위탁)">
            <p>원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Supabase Inc. — 데이터베이스 저장 및 관리</li>
              <li>Vercel Inc. — 웹사이트 호스팅</li>
            </ul>
            <p>
              위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하며, 위탁받은 업체가
              서비스 운영 목적 외로 개인정보를 이용하지 않도록 관리·감독합니다.
            </p>
          </Article>

          <Article title="제6조 (개인정보의 파기 절차 및 방법)">
            <p>
              전자적 파일 형태로 저장된 개인정보는 보유 기간이 경과하거나 처리 목적이 달성된 경우,
              복구할 수 없는 방법으로 지체 없이 영구 삭제합니다.
            </p>
          </Article>

          <Article title="제7조 (이용자 및 법정대리인의 권리와 행사 방법)">
            <p>
              학생 본인 또는 만 14세 미만 학생의 법정대리인은 언제든지 자신(또는 자녀)의 개인정보에 대해
              열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 요청은 제10조의 문의처를 통해 접수하며,
              접수 즉시 지체 없이 필요한 조치를 취합니다.
            </p>
          </Article>

          <Article title="제8조 (개인정보의 안전성 확보 조치)">
            <ul className="list-disc pl-5 space-y-1">
              <li>개인정보에 대한 접근 권한을 수업 운영에 필요한 최소 인원으로 제한</li>
              <li>이용자 정보 전송 구간에 대한 암호화(HTTPS) 적용</li>
              <li>위탁업체(Supabase)가 제공하는 데이터베이스 보안 인프라 이용</li>
            </ul>
          </Article>

          <Article title="제9조 (아동의 개인정보 보호)">
            <p>
              본 서비스는 만 14세 미만 학생의 개인정보를 수집하는 경우 법정대리인의 동의를 받으며,
              법정대리인은 자녀의 개인정보에 대한 열람·정정·삭제를 요청할 권리를 가집니다.
            </p>
          </Article>

          <Article title="제10조 (개인정보 보호책임자 및 문의처)">
            <p>이용자는 개인정보와 관련한 문의, 불만 처리, 피해 구제 등을 아래 연락처로 요청할 수 있습니다.</p>
            <p>
              개인정보 보호책임자: 주크(JooK)의 놀이터 운영자
              <br />
              이메일:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-pikachu hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </Article>

          <Article title="제11조 (권익침해 구제방법)">
            <p>개인정보 침해에 대한 신고나 상담이 필요한 경우 아래 기관에 문의할 수 있습니다.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>개인정보분쟁조정위원회 (privacy.go.kr / 국번없이 1833-6972)</li>
              <li>개인정보침해신고센터 (privacy.go.kr / 국번없이 118)</li>
              <li>대검찰청 사이버범죄수사단 (spo.go.kr / 국번없이 1301)</li>
              <li>경찰청 사이버수사국 (ecrm.police.go.kr / 국번없이 182)</li>
            </ul>
          </Article>

          <Article title="제12조 (고지의 의무)">
            <p>
              본 개인정보 처리방침의 내용 추가, 삭제 및 수정이 있는 경우 시행일 최소 7일 전부터 본
              페이지를 통해 공지합니다.
            </p>
            <p>공고일자: {EFFECTIVE_DATE} / 시행일자: {EFFECTIVE_DATE}</p>
          </Article>
        </div>
      </div>

      <Footer />
    </>
  )
}
