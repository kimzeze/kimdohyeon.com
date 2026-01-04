module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 새 기능
        'fix', // 버그 수정
        'refactor', // 리팩토링
        'style', // 코드 포맷
        'test', // 테스트
        'docs', // 문서
        'chore', // 빌드/설정
        'design', // UI/UX
      ],
    ],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0], // 한글 커밋 메시지 허용
  },
};
