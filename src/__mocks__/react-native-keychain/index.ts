const keychainMock = {
  SECURITY_LEVEL_ANY: 'MOCK_SECURITY_LEVEL_ANY',
  SECURITY_LEVEL_SECURE_HARDWARE: 'MOCK_SECURITY_LEVEL_SECURE_HARDWARE',
  SECURITY_LEVEL_SECURE_SOFTWARE: 'MOCK_SECURITY_LEVEL_SECURE_SOFTWARE',
  getGenericPassword: jest.fn().mockResolvedValue('something'),
  resetGenericPassword: jest.fn().mockResolvedValue('something'),
  setGenericPassword: jest.fn().mockResolvedValue('something'),
};

export default keychainMock;
