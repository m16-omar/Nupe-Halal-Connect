import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../../app/theme/app_theme.dart';

class HomeScreen extends ConsumerStatefulWidget {
  const HomeScreen({super.key});

  @override
  ConsumerState<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends ConsumerState<HomeScreen> {
  int _currentIndex = 0;

  final List<Map<String, dynamic>> _mockProfiles = [
    {
      'name': 'Fatima',
      'age': '22',
      'lga': 'Bida',
      'state': 'Niger',
      'education': 'B.Sc Education',
      'occupation': 'Secondary School Teacher',
      'practice': 'Practising',
      'expectations': 'Looking for a pious, hardworking Nupe brother who resides in Niger or Abuja and respects family ties.',
    },
    {
      'name': 'Aisha',
      'age': '26',
      'lga': 'Minna',
      'state': 'Niger',
      'education': 'Diploma in Nursing',
      'occupation': 'Nurse',
      'practice': 'Moderately Practising',
      'expectations': 'A practicing Muslim brother with decent education and career, ready for Wali involvement from the start.',
    },
    {
      'name': 'Maryam',
      'age': '29',
      'lga': 'Edu',
      'state': 'Kwara',
      'education': 'M.Sc Business',
      'occupation': 'Business Owner',
      'practice': 'Practising',
      'expectations': 'A responsible, family-oriented partner with whom I can build a home upon the values of Sunnah.',
    },
  ];

  void _onRequestIntroduction(String name) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text('Introduction Request sent to $name\'s Wali. You will be notified of approval.', style: GoogleFonts.inter()),
        backgroundColor: AppTheme.primaryGreen,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme.softCream,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        title: Text(
          'Nupe Halal Connect',
          style: GoogleFonts.outfit(
            fontWeight: FontWeight.bold,
            color: AppTheme.primaryGreen,
            fontSize: 20,
          ),
        ),
        centerTitle: false,
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications_none_outlined, color: AppTheme.darkCharcoal),
            onPressed: () {},
          ),
        ],
      ),
      body: _currentIndex == 0 ? _buildHomeBody() : _buildMockTab(),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) => setState(() => _currentIndex = index),
        selectedItemColor: AppTheme.primaryGreen,
        unselectedItemColor: AppTheme.secondaryGrey.withAlpha(153),
        showUnselectedLabels: true,
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home_outlined), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.explore_outlined), label: 'Explore'),
          BottomNavigationBarItem(icon: Icon(Icons.chat_bubble_outline), label: 'Chats'),
          BottomNavigationBarItem(icon: Icon(Icons.mosque_outlined), label: 'Counseling'),
          BottomNavigationBarItem(icon: Icon(Icons.settings_outlined), label: 'Settings'),
        ],
      ),
    );
  }

  Widget _buildHomeBody() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Assalamu Alaikum, Seeker!',
            style: Theme.of(context).textTheme.displayMedium?.copyWith(
                  fontSize: 24,
                  color: AppTheme.darkCharcoal,
                ),
          ),
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: AppTheme.accentGold.withAlpha(20),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: AppTheme.accentGold.withAlpha(76)),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Icon(Icons.hourglass_empty_outlined, color: AppTheme.accentGold, size: 28),
                const SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Verification Pending',
                        style: GoogleFonts.inter(
                          fontWeight: FontWeight.bold,
                          color: AppTheme.darkCharcoal,
                          fontSize: 15,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        'Our administrators are verifying your identity documents. You can browse matching candidates, but requests require full verification.',
                        style: GoogleFonts.inter(
                          color: AppTheme.secondaryGrey,
                          fontSize: 13,
                          height: 1.4,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 28),
          Text(
            'Compatible Matches in Niger/Kwara',
            style: Theme.of(context).textTheme.headlineLarge?.copyWith(fontSize: 18),
          ),
          const SizedBox(height: 16),
          ListView.separated(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: _mockProfiles.length,
            separatorBuilder: (context, index) => const SizedBox(height: 16),
            itemBuilder: (context, index) {
              final profile = _mockProfiles[index];
              return _buildProfileCard(profile);
            },
          ),
        ],
      ),
    );
  }

  Widget _buildProfileCard(Map<String, dynamic> profile) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  width: 60,
                  height: 60,
                  decoration: BoxDecoration(
                    color: AppTheme.primaryGreen.withAlpha(25),
                    shape: BoxShape.circle,
                  ),
                  child: Icon(
                    Icons.account_circle,
                    size: 40,
                    color: AppTheme.primaryGreen.withAlpha(128),
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Text(
                            profile['name'],
                            style: GoogleFonts.outfit(
                              fontWeight: FontWeight.bold,
                              fontSize: 18,
                              color: AppTheme.darkCharcoal,
                            ),
                          ),
                          const SizedBox(width: 8),
                          const Icon(Icons.verified, color: AppTheme.primaryGreen, size: 16),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Text(
                        '${profile['age']} yrs • ${profile['occupation']}',
                        style: GoogleFonts.inter(
                          color: AppTheme.secondaryGrey,
                          fontSize: 13,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            const Divider(height: 1),
            const SizedBox(height: 16),
            _buildDetailRow(Icons.location_on_outlined, 'Location', '${profile['lga']}, ${profile['state']}'),
            const SizedBox(height: 8),
            _buildDetailRow(Icons.menu_book_outlined, 'Education', profile['education']),
            const SizedBox(height: 8),
            _buildDetailRow(Icons.favorite_border_outlined, 'Practice Level', profile['practice']),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: AppTheme.softCream,
                borderRadius: BorderRadius.circular(8),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Expectations:',
                    style: GoogleFonts.inter(
                      fontWeight: FontWeight.bold,
                      fontSize: 12,
                      color: AppTheme.primaryGreen,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    profile['expectations'],
                    style: GoogleFonts.inter(
                      fontSize: 13,
                      height: 1.4,
                      color: AppTheme.darkCharcoal,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),
            OutlinedButton(
              onPressed: () => _onRequestIntroduction(profile['name']),
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.mail_outline_outlined, size: 18),
                  SizedBox(width: 8),
                  Text('Request Introduction'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDetailRow(IconData icon, String label, String value) {
    return Row(
      children: [
        Icon(icon, size: 18, color: AppTheme.secondaryGrey),
        const SizedBox(width: 12),
        Text(
          '$label: ',
          style: GoogleFonts.inter(
            fontWeight: FontWeight.w600,
            fontSize: 13,
            color: AppTheme.secondaryGrey,
          ),
        ),
        Text(
          value,
          style: GoogleFonts.inter(
            fontSize: 13,
            color: AppTheme.darkCharcoal,
          ),
        ),
      ],
    );
  }

  Widget _buildMockTab() {
    final List<String> tabNames = ['Home', 'Explore', 'Chats', 'Counseling', 'Settings'];
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Icon(
            Icons.construction_outlined,
            size: 64,
            color: AppTheme.accentGold,
          ),
          const SizedBox(height: 16),
          Text(
            '${tabNames[_currentIndex]} Portal',
            style: GoogleFonts.outfit(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: AppTheme.primaryGreen,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            'This feature will be fully active in Phase 2.',
            style: GoogleFonts.inter(
              color: AppTheme.secondaryGrey,
            ),
          ),
        ],
      ),
    );
  }
}
