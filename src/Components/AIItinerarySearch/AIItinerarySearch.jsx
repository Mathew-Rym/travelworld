import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Spinner, Alert } from 'reactstrap';
// Import icons from react-icons/ri
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import './AIItinerarySearch.css';

const AIItinerarySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [duration, setDuration] = useState('3');
  const [travelers, setTravelers] = useState('2');
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    // Simulate AI API call with timeout
    setTimeout(() => {
      try {
        // Mock AI response
        const mockResponse = {
          destination: searchQuery || 'Your Destination',
          duration: duration + ' days',
          travelers: travelers,
          itinerary: generateMockItinerary(searchQuery, duration, travelers)
        };
        setItinerary(mockResponse);
      } catch (err) {
        setError('Failed to generate itinerary. Please try again.');
        console.error('Error generating itinerary:', err);
      } finally {
        setIsLoading(false);
      }
    }, 1500);
  };

  const generateMockItinerary = (destination, days, people) => {
    const activities = [
      'Guided city tour',
      'Local cuisine tasting',
      'Museum visit',
      'Nature hike',
      'Shopping at local markets',
      'Beach relaxation',
      'Sunset cruise',
      'Cultural show',
      'Adventure sports',
      'Cooking class'
    ];

    const itinerary = [];
    for (let i = 0; i < Math.min(days, 7); i++) {
      const dayActivities = [];
      const numActivities = Math.min(3, Math.ceil(Math.random() * 2) + 1);
      
      for (let j = 0; j < numActivities; j++) {
        const randomIndex = Math.floor(Math.random() * activities.length);
        dayActivities.push(activities[randomIndex]);
        activities.splice(randomIndex, 1); // Remove to avoid duplicates
      }
      
      itinerary.push({
        day: i + 1,
        activities: dayActivities
      });
    }
    
    return itinerary;
  };

  return (
    <section className="ai-itinerary-section py-5 bg-light">
      <Container>
        <div className="section__title text-center mb-5">
          <h2>AI-Powered Itinerary Generator</h2>
          <p>Get personalized travel plans in seconds</p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg="8">
            <Card className="p-4 shadow-sm">
              <Form onSubmit={handleSearch}>
                <Row className="g-3">
                  <Col md={6}>
                    <div className="search__box">
                      <FaMapMarkerAlt className="search__icon" />
                      <input
                        type="text"
                        placeholder="Where do you want to go?"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        required
                      />
                    </div>
                  </Col>
                  
                  <Col md={3}>
                    <div className="search__box">
                      <FaCalendarAlt className="search__icon" />
                      <select
                        className="form-select"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Day' : 'Days'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  
                  <Col md={3}>
                    <div className="search__box">
                      <FaUsers className="search__icon" />
                      <select
                        className="form-select"
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, '6+'].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Traveler' : 'Travelers'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  
                  <Col xs={12} className="text-center mt-2">
                    <Button 
                      type="submit" 
                      color="primary" 
                      className="btn-search"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Spinner size="sm" className="me-2" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <FaSearch className="me-2" />
                          Generate Itinerary
                        </>
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
              
              {error && (
                <Alert color="danger" className="mt-4">
                  {error}
                </Alert>
              )}
              
              {itinerary && !isLoading && (
                <div className="itinerary-results mt-4">
                  <h4 className="mb-4">Your {itinerary.duration} Itinerary for {itinerary.destination}</h4>
                  <div className="itinerary-days">
                    {itinerary.itinerary.map((day) => (
                      <div key={day.day} className="day-card mb-3 p-3 border rounded">
                        <h5>Day {day.day}</h5>
                        <ul className="activity-list ps-3 mb-0">
                          {day.activities.map((activity, idx) => (
                            <li key={idx} className="mb-2">
                              <i className="fas fa-check-circle text-success me-2"></i>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-4">
                    <Button color="success" className="me-2">
                      <i className="fas fa-download me-2"></i>
                      Download PDF
                    </Button>
                    <Button color="outline-primary" className="ms-2">
                      <i className="fas fa-share-alt me-2"></i>
                      Share Itinerary
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AIItinerarySearch;
