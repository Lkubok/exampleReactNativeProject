jest.mock('react-native-device-info', () => {
  return {
    getBuildNumber: () => 'buildOne',
    getUniqueId: () => 'unique-id',
    getVersion: () => 'test1',
    hasNotch: () => true,
  };
});
