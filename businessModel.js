export const businessModel = {
  tiers: {
    silver: {
      monthlyFee: 299,
      estimatedMembers: 50,
      monthlyRevenue: 14950, // $299 * 50
      vehiclesNeeded: 10, // Assuming 5:1 member to car ratio
      averageCarCost: 65000,
      totalFleetInvestment: 650000, // $65,000 * 10
      vehicleTypes: [
        'BMW M3',
        'Mercedes-AMG C63',
        'Porsche Cayman'
      ],
      locations: [
        'Downtown',
        'Marina District'
      ]
    },
    gold: {
      monthlyFee: 599,
      estimatedMembers: 30,
      monthlyRevenue: 17970, // $599 * 30
      vehiclesNeeded: 8, // Assuming 4:1 member to car ratio
      averageCarCost: 120000,
      totalFleetInvestment: 960000, // $120,000 * 8
      vehicleTypes: [
        'Porsche 911',
        'Audi R8',
        'Mercedes-AMG GT'
      ],
      locations: [
        'Downtown',
        'Marina District',
        'Airport',
        'Beverly Hills'
      ]
    },
    platinum: {
      monthlyFee: 999,
      estimatedMembers: 20,
      monthlyRevenue: 19980, // $999 * 20
      vehiclesNeeded: 7, // Assuming 3:1 member to car ratio
      averageCarCost: 200000,
      totalFleetInvestment: 1400000, // $200,000 * 7
      vehicleTypes: [
        'Ferrari F8 Tributo',
        'Lamborghini Huracán',
        'McLaren 720S'
      ],
      locations: [
        'All Locations',
        'Custom Pickup Available'
      ]
    }
  },
  financials: {
    totalMonthlyRevenue: 52900, // Sum of all tiers
    totalFleetInvestment: 3010000, // Sum of all fleet investments
    monthlyOperatingCosts: {
      insurance: 15000,
      maintenance: 8000,
      storage: 5000,
      staff: 20000,
      marketing: 5000,
      total: 53000
    },
    breakevenPeriod: '57 months' // Total Investment / Monthly Net
  },
  locations: {
    downtown: {
      address: '123 Main St',
      capacity: 10,
      securityLevel: 'High',
      staffing: '24/7'
    },
    marinaDistrict: {
      address: '456 Marina Blvd',
      capacity: 8,
      securityLevel: 'High',
      staffing: '24/7'
    },
    airport: {
      address: '789 Airport Way',
      capacity: 5,
      securityLevel: 'Medium',
      staffing: 'On-Demand'
    },
    beverlyHills: {
      address: '321 Beverly Dr',
      capacity: 7,
      securityLevel: 'High',
      staffing: '24/7'
    }
  }
};