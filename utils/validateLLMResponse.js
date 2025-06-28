export function validateLLMResponse(data) {
    const complianceValues = ['high', 'medium', 'low', 'none'];
    const riskValues = ['green', 'yellow', 'red'];
  
    if (
      typeof data !== 'object' ||
      typeof data.category !== 'string' ||
      !complianceValues.includes(data.compliance) ||
      !riskValues.includes(data.risk)
    ) {
      return false;
    }
  
    return true;
  }
  